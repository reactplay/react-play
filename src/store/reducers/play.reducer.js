import { GET_ALL_PLAYS } from "../../actions/type";

const PlayReducer = (state = [], actions) => {
  switch (actions.type) {
    case GET_ALL_PLAYS:
      if (actions.error) {
        return [];
      }
      const data = actions.payload ?? []
      return [...data];
    default:
      return state;
  }
};

export default PlayReducer;