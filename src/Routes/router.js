import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/whoweare" component={WhoWeAre} />
      </Switch>
    </BrowserRouter>
  );
}
