import { GET_WEATHER_DATA } from "../actions";
import { initialState } from "../store";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        data: [action.payload],
      };
    default:
      return state;
  }
};

export default appReducer;
