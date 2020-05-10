import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";

import {auth} from './firebase/firebase-util';

class App extends React.Component {

  constructor(){
    super();
    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth= null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=> {
      this.setState({currentUser: user});
      console.log(user);

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div>
        {/* by placing header outside of switch,it is always available
      across all pages */}
      {/* make header aware of user state */}
        <Header currentUser= {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
