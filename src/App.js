import React, { Component } from "react";
import SignIn from "./SignIn";
import Allpages from "./AllPages";
// import Species from "./Species";
// import Starships from "./Starships";
// import Vehicles from "./Vehicles";
// import People from "./People";
// import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./assets/styles/main.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import AllPages from "./AllPages";

export default class App extends React.Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route exact path="/login" component={SignIn}></Route>
          <Redirect path="/" to="/login" exact />
          <Route exact path="/dashboard" component={AllPages}></Route>
          <Route exact path="/species" component={AllPages}></Route>
          <Route exact path="/starships" component={AllPages}></Route>
          <Route exact path="/vehicles" component={AllPages}></Route>
          <Route exact path="/people" component={AllPages}></Route>
          <Route
            path="*"
            render={() => (
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                Not found{" "}
              </div>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}
