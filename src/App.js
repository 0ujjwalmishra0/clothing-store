import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
  return (
    <div>
      {/* by placing header outside of switch,it is always available
    across all pages */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
