const plays = () => [];

const getAllPlays = () => {
  return plays();
};

const getPlayById = (id) => {
  return plays().find((play) => play.id === id);
};

const getPlaysOnSearch = (searchTerm) => {
  return plays().filter((play) => {
    return (
      play.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      play.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};

const getPlaysByTags = (tags) => {
  return plays().filter((play) => {
    return play.tags.includes(tags);
  });
};

const getPlaysByLevel = (level) => {
  return plays().filter((play) => {
    return play.level === level;
  });
};

const getPlaysByCreator = (creator) => {
  return plays().filter((play) => {
    return play.github === creator;
  });
};

const getPlaysByLanguage = (language) => {
  return plays().filter((play) => {
    const lang = play.language || "js";
    return lang === language;
  });
};

const getAllTags = (plays) => {
  const tags = plays.reduce((acc, play) => {
    return acc.concat(
      play.play_tags.reduce((pre, next) => {
        return pre.concat({tag: next.tag.name, id: next.tag.id});
      }, [])
    );
  }, []);
  let finalArr = new Array();
  tags.forEach((item) => {
    if (!finalArr.find(_ => _.id === item.id)) {
      finalArr.push(item);
    }
  });
  return finalArr;
};

const getAllCreators = () => {
  const creators = plays().reduce((acc, play) => {
    play.github && acc.push(play.github);
    return acc;
  }, []);

  return Array.from(new Set([...creators]));
};

const getAllLevels = () => {
  const levels = plays().reduce((acc, play) => {
    return acc.concat(play.level);
  }, []);

  return Array.from(new Set([...levels]));
};

const getAllLanguages = () => {
  const languages = plays().reduce((acc, play) => {
    const lang = play.language || "js";
    return acc.concat(lang);
  }, []);

  return Array.from(new Set([...languages]));
};

const getFeaturedPlays = () => {
  const featuredPlays = plays().filter((play) => {
    return play.featured;
  });
  return featuredPlays;
};

export {
  getAllPlays,
  getPlayById,
  getPlaysOnSearch,
  getPlaysByLevel,
  getPlaysByTags,
  getPlaysByLanguage,
  getPlaysByCreator,
  getAllTags,
  getAllCreators,
  getAllLevels,
  getAllLanguages,
  getFeaturedPlays,
};
