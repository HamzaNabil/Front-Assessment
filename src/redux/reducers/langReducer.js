import { CHANGE_LANGUAGE } from "../actions/constants";

function langReducer(state = { lang: "en" }, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        lang: action.lang,
      };

    default:
      return state;
  }
}

export default langReducer;
