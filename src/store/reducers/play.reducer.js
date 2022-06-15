import { GET_ALL_PLAYS } from "../../actions/type";

const PlayReducer = (state = [], actions) => {
  switch (actions.type) {
    case GET_ALL_PLAYS:
      if (actions.error) {
        return [];
      }
      if (actions.payload) {
        return [...actions.payload];
      }
      return state;
    default:
      return state;
  }
};

export default PlayReducer;