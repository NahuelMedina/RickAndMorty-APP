import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      const filterCharacters = state.myFavorites.filter(
        (favorite) => favorite.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filterCharacters,
      };

    default:
      return { ...state };
  }
}
