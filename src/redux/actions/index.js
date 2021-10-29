export const GET_WEATHER_DATA = "GET_WEATHER_DATA";
export const GET_WEATHER_LOADING = "GET_WEATHER_LOADING";
export const SET_CURRENT_BACKGROUND = "SET_CURRENT_BACKGROUND";

export const getWeatherData = (query) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    dispatch({
      type: GET_WEATHER_LOADING,
      payload: true,
    });
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiKey}`
    );
    let weather = await res.json();
    dispatch({
      type: GET_WEATHER_DATA,
      payload: weather,
    });
    dispatch({
      type: SET_CURRENT_BACKGROUND,
      payload: weather.weather[0].main,
    });
    dispatch({
      type: GET_WEATHER_LOADING,
      payload: false,
    });
  };
};
