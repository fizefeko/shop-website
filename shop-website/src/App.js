import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ProductOverview from "./components/Pages/product-overview/product-overview.component";
import Header from "./components/Partials/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/products" component={ProductOverview} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
