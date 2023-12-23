import * as types from "../actiontypes";
import api from "../../api/api";

export const listAlbums = (albums) => ({
  type: types.VF_NZ_ALBUMS,
  payload: albums
});

export const albumsList = () => (dispatch) =>
  api.albums.albumsList().then((res) => dispatch(listAlbums(res.data)));
