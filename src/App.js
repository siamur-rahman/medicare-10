import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from "./Components/pages/About/About";
import Doctors from "./Components/pages/Doctors/Doctors";
import Error from "./Components/pages/Error/Error";

import Home from "./Components/pages/Home/Home";
import Login from "./Components/pages/Login/Login";
import ServicesDetails from "./Components/pages/ServiceDetails/ServicesDetails";



function App() {
  return (
    <Router>


      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/home/:id">
          <ServicesDetails></ServicesDetails>
        </Route>
        <Route exact path="/doctor">
          <Doctors></Doctors>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>

    </Router >
  );
}

export default App;
