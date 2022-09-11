export const defaultInputFields = {
  name: "",
  description: "",
  issue: "",
  language: "",
  style: "",
  level: "",
  github: "",
  tags: [],
  cover: "",
  blog: "",
  video: "",
  id: ""
};

export const constructLevelInfo = (lvlData, currLvl) => {
  return lvlData?.find((i) => i.name === currLvl?.name) ?? "";
};

export const constructTagInfo = (tagData, currTags) => {
  if (!currTags.length) return "";
  const tagArr = currTags?.map((i) => i.tag.name);
  return tagData.filter((item) => tagArr.includes(item.name));
};

export const constructLanguageInfo = (currLang) => {
  return { value: currLang, name: currLang.toUpperCase() };
};

// {
//   name: "demoplay",
//   description: "description of play",
//   issue: {
//     name: "Dark and Light Mode Implemented on the ReactPlay Website",
//     value: 522,
//   },
//   language: {
//     name: "JavaScript",
//     value: "js",
//   },
//   style: {
//     name: "CSS",
//     value: "css",
//   },
//   level: {
//     id: "4127ed16-bf37-4c34-bed0-282cd646cd53",
//     name: "Beginner",
//     value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
//   },
//   github: "Angryman18",
//   tags: [
//     {
//       id: "914e9491-b1f6-4b90-ad0f-727eabd5a41e",
//       name: "JSX",
//     },
//     {
//       id: "457a8807-3c4a-4868-9113-104482837650",
//       name: "Component Structure",
//     },
//   ],
//   cover: "cover img",
//   blog: "blog url",
//   video: "video url",
// };

export const createStateObject = (existingObj, storedData) => {
  const { name, description, github, cover, blog, video, play_tags, language, level, id } = existingObj;
  const {tags, level: levelData} = storedData
  const levelInfo = constructLevelInfo(levelData, level);
  const tagsInfo = constructTagInfo(tags, play_tags);
  const languageInfo = constructLanguageInfo(language);
  return {name, description, github, cover, blog, video, id, tags: tagsInfo, level: levelInfo, language: languageInfo}
};
