import React from "react";
import Main from "./Main/index";
import Detail from "./Detail/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}
