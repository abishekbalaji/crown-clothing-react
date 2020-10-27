import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";

const Hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/hats" component={Hats} />
    </Switch>
  </div>
);

export default App;
