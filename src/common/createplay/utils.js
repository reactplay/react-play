export const defaultInputFields = {
  name: '',
  description: '',
  issue: '',
  language: '',
  style: '',
  level: '',
  github: '',
  tags: [],
  cover: '',
  blog: '',
  video: '',
  id: ''
};

export const constructLevelInfo = (lvlData, currLvl) => {
  return lvlData?.find((i) => i.name === currLvl?.name) ?? '';
};

export const constructTagInfo = (tagData, currTags) => {
  if (!currTags.length) return [];
  const tagArr = currTags?.map((i) => i.tag.name);

  return tagData.filter((item) => tagArr.includes(item.name));
};

export const constructLanguageInfo = (currLang) => {
  return { value: currLang, name: currLang.toUpperCase() };
};

export const createStateObject = (existingObj, storedData) => {
  const { name, description, github, cover, blog, video, play_tags, language, level, id } =
    existingObj;
  const { tags, level: levelData } = storedData;
  const levelInfo = constructLevelInfo(levelData, level);
  const tagsInfo = constructTagInfo(tags, play_tags);
  const languageInfo = constructLanguageInfo(language);

  return {
    name,
    description,
    github,
    cover,
    blog,
    video,
    id,
    tags: tagsInfo,
    level: levelInfo,
    language: languageInfo
  };
};
