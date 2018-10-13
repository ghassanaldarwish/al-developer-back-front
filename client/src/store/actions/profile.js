import * as actionType from "./actionTypes";
import axios from "axios";

export const onProfile = () => async dispatch => {
  const res = await axios.get("/api/profile");

  dispatch({ type: actionType.FETCH_PROFILE, payload: res.data });
};
