import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shopPage/ShopPage.component";

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);

export default App;
