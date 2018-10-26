import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
  errors: errorReducer
});
