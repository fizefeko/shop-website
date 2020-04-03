import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ProductOverview from "./components/Pages/product-overview/product-overview.component";
import Header from "./components/Partials/header/header.component";
import Footer from "./components/Partials/footer/footer.component";
import Home from "./components/Pages/home/home.component";
import ProductDetails from "./components/Pages/product-details/product-details.component";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductOverview} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
