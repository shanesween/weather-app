// import React, { Component, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchWeather } from "../redux/reducer";

// import { withRouter, Route, Switch } from "react-router-dom";
// import CurrentWeather from "./components/CurrentWeather";
// import HourWeather from "./components/HourWeather";
// import WeekWeather from "./components/WeekWeather";
// import WeatherDisplay from "./components/WeatherDisplay";
// import SecondaryNavigation from "./components/SecondaryNavigation";

// const Routes = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchWeather(`Chicago, IL, USA`));
//   }, [dispatch]);

//   const data = useSelector((state) => state.data);
//   const weather = data.data;
//   const location = useSelector((state) => state.location);

//   if (weather) {
//     return (
//       <>
//         <SecondaryNavigation />
//         <Switch>
//           <Route exact path="/" component={CurrentWeather} />

//           <Route path="/now" component={CurrentWeather} />
//           <Route path="/hourly" component={HourWeather} />
//           <Route path="/weekly" component={WeekWeather} />
//         </Switch>
//       </>
//     );
//   }
// };

// export default withRouter(Routes);
