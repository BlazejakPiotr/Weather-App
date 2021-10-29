export const GET_WEATHER_DATA = "GET_WEATHER_DATA";

export const getWeatherData = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    let res = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=warszawa&APPID=${apiKey}`
    );
    let weather = await res.json();
    dispatch({
      type: GET_WEATHER_DATA,
      payload: weather,
    });
  };
};
