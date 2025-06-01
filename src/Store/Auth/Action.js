import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { LOGOUT } from "./ActionType";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: data });
    console.log("loggedin user", data);
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "LOGIN_USER_FAILURE", payload: error });
  }
};
export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      registerData
    );
    console.log("signup user", data);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    dispatch({ type: "REGISTER_USER_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "REGISTER_USER_FAILURE", payload: error });
  }
};
export const getUserProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    dispatch({ type: "GET_USER_PROFILE_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "GET_USER_PROFILE_FAILURE", payload: error });
  }
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: LOGOUT, payload: null });
};
