import { combineReducers } from "redux";
import langReducer from "./langReducer";
import searchReducer from "./searchReducer";

const reducer = combineReducers({
  language: langReducer,
  search: searchReducer,
});

export default reducer;
