import * as types from "../actiontypes";
import api from "../../api/api";

export const listUsers = (users) => ({
  type: types.VF_NZ_USERLIST,
  payload: users
});

export const usersList = () => (dispatch) =>
  api.users.usersList().then((res) => dispatch(listUsers(res.data)));
