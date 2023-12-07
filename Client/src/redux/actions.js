import { ADD_FAV, REMOVE_FAV } from "./action-types";
import axios from "axios";
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const res = await axios.post(endpoint, character);
    const data = res.data;
    return dispatch({
      type: ADD_FAV,
      payload: data,
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const res = await axios.delete(endpoint);
    const data = res.data;
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
  };
};
