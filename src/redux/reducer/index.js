import {
  GET_WEATHER_DATA,
  GET_WEATHER_LOADING,
  SET_CURRENT_BACKGROUND,
} from "../actions";
import { initialState } from "../store";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GET_WEATHER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_CURRENT_BACKGROUND:
      return {
        ...state,
        bg: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
