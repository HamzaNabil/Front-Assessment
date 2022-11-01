import { CHANGE_LANGUAGE } from "./constants";

function langAction(lang) {
  return {
    type: CHANGE_LANGUAGE,
    lang,
  };
}

export default langAction;
