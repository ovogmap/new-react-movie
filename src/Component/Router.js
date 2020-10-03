import React from "react";
import Main from "./Main/index";
import Detail from "./Detail/index";
import List from "./List/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/list" component={List} />
      </Switch>
    </Router>
  );
}
