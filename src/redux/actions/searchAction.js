import { SEARCH_TERM } from "./constants";

function searchAction(term) {
  return {
    type: SEARCH_TERM,
    term,
  };
}

export default searchAction;
