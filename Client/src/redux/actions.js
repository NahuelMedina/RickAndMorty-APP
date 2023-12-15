import { ADD_FAV, REMOVE_FAV } from "./action-types";
import axios from "axios";
export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const res = await axios.post(endpoint, character);
      const data = res.data;
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return alert(error.message);
  }
};

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const res = await axios.delete(endpoint);
      const data = res.data;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return alert(error.message);
  }
};
