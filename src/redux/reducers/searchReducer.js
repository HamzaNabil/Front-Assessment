import { SEARCH_TERM } from "../actions/constants";

function searchReducer(state = { term: "" }, action) {
  switch (action.type) {
    case SEARCH_TERM:
      return {
        term: action.term,
      };

    default:
      return state;
  }
}

export default searchReducer;
