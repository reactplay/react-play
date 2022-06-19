const plays = () => [];

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

const getFeaturedPlays = () => {
  const featuredPlays = plays().filter((play) => {
    return play.featured;
  });
  return featuredPlays;
};

export {
  getPlayById,
  getPlaysOnSearch,
  getAllTags,
  getFeaturedPlays,
};
