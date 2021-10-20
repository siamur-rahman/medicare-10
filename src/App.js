import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AuthProvider from "./Components/contexts/AuthProvider";
import About from "./Components/pages/About/About";
import Doctors from "./Components/pages/Doctors/Doctors";
import Error from "./Components/pages/Error/Error";
import Home from "./Components/pages/Home/Home";
import Login from "./Components/pages/Login/Login";
import PrivateRoute from "./Components/pages/PrivateRoute/PrivateRoute";
import Register from "./Components/pages/ReGister/Register";
import ServicesDetails from "./Components/pages/ServiceDetails/ServicesDetails";



function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute exact path="/home/:id">
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctor">
            <Doctors></Doctors>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router >
    </AuthProvider>
  );
}

export default App;
