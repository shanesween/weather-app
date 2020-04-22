import axios from "axios";

const initialState = {
  data: {},
  location: "",
};

//ACTION TYPES
const SHOW_WEATHER_DATA = "SHOW_WEATHER_DATA";

// ACTION CREATORS
const showWeatherData = (data, location) => {
  return {
    type: SHOW_WEATHER_DATA,
    payload: data,
    location: location,
  };
};

export const fetchWeather = (location) => {
  return async (dispatch) => {
    try {
      let currentLocation = null;
      let lat = null;
      let lng = null;
      // console.log("Location", location);
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDypxl6uBUlPp8HF94-5dgcPsH4JFGQaIE`
      );
      currentLocation = data.results[0].formatted_address;
      lat = data.results[0].geometry.location.lat;
      lng = data.results[0].geometry.location.lng;

      // console.log("Chicago data here", currentLocation, lat, lng);

      const weatherData = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c1e5b86cc1bae15b106bf0219eafd448/${lat},${lng}`
      );

      dispatch(showWeatherData(weatherData, currentLocation));

      // console.log("ChicagoWeather", weatherData);
    } catch (err) {
      console.log("Error in Weather Fetch", err);
    }
  };
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WEATHER_DATA:
      return { ...state, data: action.payload, location: action.location };

    default:
      return state;
  }
};

export default rootReducer;
