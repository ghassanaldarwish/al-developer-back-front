import * as actionType from "./actionTypes";
import axios from "axios";

export const onProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile");

    dispatch({ type: actionType.GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: actionType.GET_PROFILE, payload: {} });
  }
};
