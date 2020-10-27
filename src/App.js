import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shopPage/ShopPage.component";
import Header from "./components/header/Header.component";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);

export default App;
