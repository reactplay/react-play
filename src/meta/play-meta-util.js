const getAllTags = (plays) => {
  const tags = plays.reduce((acc, play) => {
    return acc.concat(
      play.play_tags.reduce((pre, next) => {
        return pre.concat({ tag: next.tag.name, id: next.tag.id });
      }, [])
    );
  }, []);
  let finalArr = [];
  tags.forEach((item) => {
    if (!finalArr.find((_) => _.id === item.id)) {
      finalArr.push(item);
    }
  });

  return finalArr;
};

export { getAllTags };
