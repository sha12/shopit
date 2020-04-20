import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import ShopPage from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sing-up/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
      // this.setState({ currentUser: user });
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
