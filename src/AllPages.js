import React, { Component } from "react";
import SignIn from "./SignIn";
// import Allpages from "./AllPages";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import People from "./People";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./assets/styles/main.scss";
import "./assets/styles/navbar-fixed.scss";

import { Switch, Route, Redirect } from "react-router-dom";

function AllPages() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/species" component={Species}></Route>
        <Route exact path="/starships" component={Starships}></Route>
        <Route exact path="/vehicles" component={Vehicles}></Route>
        <Route exact path="/people" component={People}></Route>
      </Switch>
    </div>
  );
}

export default AllPages;
