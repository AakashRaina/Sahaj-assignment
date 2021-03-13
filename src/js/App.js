import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "../css/App";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to='/login' />;
          }}
        />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
      </Switch>
    );
  }
}

export default App;
