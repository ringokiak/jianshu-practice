import { combineReducers } from "redux";
import headerReducer from "../common/header/store";

// 合并小仓库
export default combineReducers({
  header: headerReducer
});
