import axios from "axios";

const BACKEND_URL = `${process.env.REACT_APP_NHOST_BACKEND_URL}/${process.env.REACT_APP_NHOST_VERSION}/${process.env.REACT_APP_NHOST_ENDPOINT}`;
const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Run GraphQL queries using Axios using multiple  JSON object
 * @param {object[]} requests           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 */
export const submit_multi = (requests, url, reqheder) => {
  const promises = [];
  let updatedHeader = header.headers;
  if (reqheder) {
    updatedHeader = { ...updatedHeader, ...reqheder };
    header.headers = updatedHeader;
  }
  requests.forEach((config) => {
    promises.push(submit(config, url, reqheder));
  });
  return Promise.all(promises);
};

/**
 * Run GraphQL queries using Axios using a simple JSON object
 * @param {object} request           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 * @returns {Promise} single promise
 */
export const submit = (request, url, reqheder) => {
  let updatedHeader = header.headers;
  if (reqheder) {
    updatedHeader = { ...updatedHeader, ...reqheder };
    header.headers = updatedHeader;
  }
  return postData(url, request, updatedHeader)
    .then((res) => {
      let data;
      try {
        if (res.isAxiosError) {
          data = { name: "Error" };
          data.status = res.response.status;
          data.message = res.message;
        } else if (!res?.data) {
          data = { name: "Error" };
          data.status = 500;
          data.message = res.message;
        } else if (res.data.errors && res.data.errors.length) {
          data = { name: "Error" };
          data.status = 500;
          data.message = res.data.errors[0].message;
          if (request.callback) {
            data = request.callback(data);
          }
        } else {
          data =
            res.data[request.function] === undefined
              ? {}
              : res.data[request.function];
        }
        return data;
      } catch (err) {}
    })
    .catch((error) => {
      return Promise.reject(error);
    })
    .finally(() => {});
};

function postData(url, config, reqheaders) {
  const processedBody = prepareQuery(config);
  let pbody = {
    query: processedBody,
    variables:
      config.variables && config.variables instanceof Object
        ? config.variables
        : {},
  };
  let options = {
    headers: Object.assign(reqheaders || {}, header.headers),
  };
  return axios
    .post(url || BACKEND_URL, JSON.stringify(pbody), options)
    .then((res) => {
      if (res.data.errors) {
        console.error("Error encountered while receiving data");
        console.error(JSON.stringify(res.data.errors, null, 2));
        throw res.data.errors;
      }
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

function prepareQuery(config) {
  let res = "";
  if (config.write) {
    if (config.custom) {
      res = `
           mutation
           ${config.method}${getCustomParametersFormatted(
        "$",
        config.param,
        ""
      )}{
            ${config.method}${getCustomParametersFormatted(
        "",
        config.param,
        "$"
      )}
           }`;
    } else {
      res = `
        mutation {
      ${config.method}${getParametersFormatted(config.param)}
        ${getBodyFormatted(config.body)}    
        }
    `;
    }
  } else {
    res = `
    query ${config.name}{
        ${parseQueryBody(config)}
    }
    `;
  }
  return res;
}

function getGraphQLType(type) {
  switch (type) {
    case "string":
      return "String";
    case "int":
      return "Int";
    default:
      return `${type}`;
  }
}

function formatType(param) {
  switch (param.isArray) {
    case true:
      return `[${param.type}]!`;
    default:
      return `${param.type}!`;
  }
}

function getCustomParametersFormatted(before, param, after) {
  let res = "";
  if (param && String(before).length !== 0) {
    Object.keys(param).forEach((key) => {
      param[key].type = getGraphQLType(param[key].type);

      if (res) {
        res = `${res},`;
      }
      res = `${res}${before}${key}:${formatType(param[key])}`;
    });
    res = `(${res})`;
  } else if (param && String(after).length !== 0) {
    Object.keys(param).forEach((key) => {
      if (res) {
        res = `${res},`;
      }
      res = `${res}${key}:${after}${key}`;
    });
    res = `(${res})`;
  }
  return res;
}

function getBodyFormatted(body) {
  let res = "";
  if (body) {
    if (body.split(",") > 1) {
      if (body) {
        res = body.replace(",", "\n");
        res = `{
                ${res}
            }`;
      }
    } else {
      res = `{
                ${body}
            }`;
    }
  }
  return res;
}
function getParametersFormatted(param) {
  let res = "";
  if (param) {
    Object.keys(param).forEach((key) => {
      const pval = getParamValue(param[key]);
      if (pval !== null && pval !== undefined) {
        if (res) {
          res = `${res},`;
        }
        res = `${res}${key}:${pval}`;
      }
    });
    res = `(${res})`;
  }
  return res;
}

function getParamValue(param) {
  if (param && param.type) {
    if (param.value === undefined) {
      return null;
    }
    switch (param.type) {
      case "string":
        return `"${param.value}"`;
      case "datestart":
        return param.value
          ? `"${setDateTo(new Date(param.value), true).toISOString()}"`
          : undefined;
      case "dateend":
        return param.value
          ? `"${setDateTo(new Date(param.value)).toISOString()}"`
          : undefined;
      case "array":
        return Array.isArray(param.value)
          ? `[${param.value.map((p) => `"${p}"`).join(",")}]`
          : `[${param.value}]`;
      case "stringtoarray":
        if (typeof param.value === "string" && param.value.length === 0) {
          return `[${param.value
            .split(",")
            .map((p) => `"${p}"`)
            .join(",")}]`;
        } else {
          return "[]";
        }
      case "objecttoarray":
        return Array.isArray(param.value)
          ? JSON.stringify(param.value)
          : `[${param.value}]`;

      default:
        return param.value;
    }
  } else {
    return param;
  }
}

function setDateTo(dt, start) {
  dt.setHours(start ? 0 : 23);
  dt.setMinutes(start ? 0 : 59);
  dt.setSeconds(start ? 0 : 59);
  return dt;
}

// const prepareBody = (config) => {
//   let strRes = config.method;
//   const parametes = [];
//   if (config.parameters) {
//     config.parameters.forEach(function (elem) {
//       parametes.push(`${elem.name}: "${elem.value}"`);
//     });
//     strRes += `(${parametes.join(",")})`;
//   }
//   strRes += `{${config.returnParams.join("\n")}}`;
//   return queryWrapper(strRes);
// };

// const mutationWrapper = (payload, variables) => {
//   return JSON.stringify({
//     query: `${payload}`,
//     variables: variables instanceof Object ? variables : {},
//   });
// };

// const queryWrapper = (payload) => {
//   return JSON.stringify({
//     query: `{${payload}}`,
//     variables: {},
//   });
// };

const parseQueryBody = (config) => {
  const body = parseQueryParameterss(config.params);
  const clause = prepareClause(config);
  const res = `${config.function} ${clause} {
    ${body}
}`;

  return res;
};

const prepareClause = (config) => {
  let res = "";
  const where = config.where;
  const filters = config.filters;
  const orders = config.orders;
  if (where || filters || orders) {
    res = "(%DATA%)";
  }
  if (filters) {
    filters.forEach((f) => {
      res = res.replace("%DATA%", `${f.field}:${f.value},%DATA%`);
    });
  }

  if (orders) {
    res = res.replace("%DATA%", `order_by: %DATA%`);
    orders.forEach((f) => {
      res = res.replace("%DATA%", `{${f.field}:${f.value}},%DATA%`);
    });
  }

  if (where) {
    res = res.replace("%DATA%", "where: %DATA%");
    if (where.operator) {
      res = res.replace("%DATA%", `{_${where.operator}:[%DATA%]}`);
    }

    if (where.clause) {
      let clause = "";
      where.clause.forEach((c) => {
        if (where.class) {
          clause = `${clause} {${where.class}:{${c.field}:{_${
            c.operator
          }: ${getParamValue(c)}}}}`;
        } else {
          clause = `${clause} {${c.field}:{_${c.operator}: ${getParamValue(
            c
          )}}}`;
        }
      });
      res = res.replace("%DATA%", `${clause}`);
    }
  }

  return res.replace("%DATA%", "");
};

const parseQueryParameterss = (params) => {
  let res = "";
  if (typeof params === "string") {
    res = `${res} ${params}`;
  } else if (Array.isArray(params)) {
    params.forEach((p) => {
      res = `${res}  ${parseQueryParameterss(p)}`;
    });
  } else if (typeof params === "object") {
    Object.keys(params).forEach((pk) => {
      if (pk === "where") {
        return "";
      }
      const currentObject = params;
      const clause = prepareClause(currentObject);

      res = `${res} ${pk} ${clause} {${parseQueryParameterss(params[pk])}}
        `;
    });
  }
  return res;
};
