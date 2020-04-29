// import axios from "axios";

// export const fetchWeather = (location) => {
//   return async (dispatch) => {
//     let currentLocation = null;
//     let lat = null;
//     let lng = null;

//     try {
//       const { data } = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDypxl6uBUlPp8HF94-5dgcPsH4JFGQaIE`
//       );
//       currentLocation = data.results[0].formatted_address;
//       lat = data.results[0].geometry.location.lat;
//       lng = data.results[0].geometry.location.lng;

//       const weatherData = await axios.get(
//         `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c1e5b86cc1bae15b106bf0219eafd448/${lat},${lng}`
//       );
//       console.log("Weather", weatherData);
//     } catch (err) {
//       console.log("Error fetching location", err);
//     }
//   };
// };
