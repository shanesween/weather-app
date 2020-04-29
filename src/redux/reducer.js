import axios from "axios";

const initialState = {
  data: {},
  location: [],
  mode: "F",
};

//ACTION TYPES
const SHOW_WEATHER_DATA = "SHOW_WEATHER_DATA";
const TOGGLE_MODE = "TOGGLE_MODE";

// ACTION CREATORS
const showWeatherData = (data, location) => {
  return {
    type: SHOW_WEATHER_DATA,
    payload: data,
    location: location,
  };
};

export const toggleMode = (unit) => ({
  type: TOGGLE_MODE,
  mode: unit,
});

export const fetchWeather = (lat, lng, location) => {
  return async (dispatch) => {
    try {
      // let lat = null;
      // let lng = null;
      // console.log("Location", location);
      let currentLocation = [];

      if (lat === null && lng === null) {
        const { data } = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDypxl6uBUlPp8HF94-5dgcPsH4JFGQaIE`
        );
        console.log("DATA HERE", data);

        lat = data.results[0].geometry.location.lat;
        lng = data.results[0].geometry.location.lng;
        currentLocation.push(
          data.results[0].address_components[0].long_name,
          data.results[0].address_components[2].short_name
        );
      }

      if (location === null) {
        const { data } = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDypxl6uBUlPp8HF94-5dgcPsH4JFGQaIE`
        );

        currentLocation.push(
          data.results[0].address_components[2].short_name,
          data.results[0].address_components[4].short_name
        );
        console.log("CINCY", data.results);
      }

      // console.log("Chicago data here", currentLocation, lat, lng);

      const weatherData = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c1e5b86cc1bae15b106bf0219eafd448/${lat},${lng}`
      );

      dispatch(showWeatherData(weatherData, currentLocation));
    } catch (err) {
      console.log("Error in Weather Fetch", err);
    }
  };
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WEATHER_DATA:
      return { ...state, data: action.payload, location: action.location };
    case TOGGLE_MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};

export default rootReducer;
