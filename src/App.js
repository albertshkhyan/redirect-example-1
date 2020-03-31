import React from "react";
import "./App.scss";

import { About, Header, Home, Register, Messages, SignIn } from "./components";

import { Switch, Route } from "react-router";


export default function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Messages" component={Messages} />
        <Route path="/Register" component={Register} />
        <Route path="/signIn" component={SignIn} />
        {/* <Redirect from="/" to="/LoginPage" /> */}
      </Switch>
    </div>
  );
}
