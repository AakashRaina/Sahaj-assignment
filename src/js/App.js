import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "css/App";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            const value = localStorage.getItem("isAuthenticated");
            if (value === "true") return <Redirect to='/home' />;
            else return <Redirect to='/login' />;
          }}
        />
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/home' component={Home} />
      </Switch>
    );
  }
}

const ProtectedRoute = (props) => {
  const value = localStorage.getItem("isAuthenticated");

  if (value !== "true") return <Redirect to='/login' />;
  else return <Route {...props} />;
};

export default App;
