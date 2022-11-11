const EmailSlugMaps = [
  {
    text: ".",
    mask: "__dt__",
  },
  {
    text: "@",
    mask: "__at__",
  },
  {
    text: "-",
    mask: "__hy__",
  },
];

export const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

export const toPascalcase = (str) => {
  let res = `${str}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  res = res.replace(/^./, str[0].toLowerCase());
  return res;
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const replaceAll = (str, replaceWhat, replaceTo) => {
  replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  var re = new RegExp(replaceWhat, "g");
  return str.replace(re, replaceTo);
};

export const toTitleCaseTrimmed = (str) => {
  const titleCse = toTitleCase(str);
  return titleCse.replace(/\s/g, "");
};

export const toSlug = (str) => {
  return toSanitized(str).toLowerCase();
};
const maps = [
  {
    text: ".",
    mask: "__dt__",
  },
  {
    text: "@",
    mask: "__at__",
  },
];
export const toSanitized = (str) => {
  if (!str) {
    return "";
  }
  //replace all special characters | symbols with a space
  str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ");
  // trim spaces at start and end of string
  str = str.replace(/^\s+|\s+$/gm, "");
  // replace space with dash/hyphen
  str = str.replace(/\s+/g, "-");
  return str;
};

export const email2Slug = (email) => {
  let convertedEmail = email;
  EmailSlugMaps.forEach((m) => {
    convertedEmail = convertedEmail.replace(
      new RegExp(`[${m.text}]`, "gm"),
      m.mask
    );
  });
  return convertedEmail;
};

export const slug2Email = (email) => {
  let convertedEmail = email;
  EmailSlugMaps.forEach((m) => {
    convertedEmail = convertedEmail.replace(
      new RegExp(`${m.mask}`, "gm"),
      m.text
    );
  });
  return convertedEmail;
};
