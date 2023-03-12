import { FIELD_TEMPLATE } from './filter-template';

export const ParseQuery = (queryString) => {
  if (!queryString) {
    return undefined;
  }
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};

export const QueryExtractValue = (query) => {
  const targetQuery = {};
  Object.keys(query).forEach((key) => {
    targetQuery[key] = query[key].split(',');
  });

  return targetQuery;
};
export const QueryDBTranslator = (query) => {
  const extractedValue = QueryExtractValue(query);
  const res = {};
  FIELD_TEMPLATE.forEach((field) => {
    if (extractedValue[field.datafield]) {
      if (field.dbfield) {
        res[field.dbfield] = extractedValue[field.datafield];
      } else {
        res[field.datafield] = extractedValue[field.datafield];
      }
    }
  });
  if (query.text) {
    res['text'] = extractedValue['text'][0];
  }

  return res;
};
