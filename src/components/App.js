import { Route } from "react-router-dom";
import React, { Component } from "react";
import Subscribe from "./Subscribe";
import ThankYou from "./ThankYou";
import PageShell from "./PageShell";
import Header from './Header'
import Container from "./Container";

class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <Container />
      <Route path="/" exact component={PageShell(Subscribe)}></Route>
      <Route path="/thanks" exact component={PageShell(ThankYou)}></Route>
      </div>;
  }
}
export default App;
