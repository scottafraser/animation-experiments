import { Route } from "react-router-dom";
import React, { Component } from "react";
import Subscribe from "./Subscribe";
import ThankYou from "./ThankYou";
import PageShell from "./PageShell";
import Header from './Header'
import Container from "./Container";
import MenuButton from './MenuButton'
import Menu from './Menu'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
      visible:false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return <div className="App">
      <MenuButton handleMouseDown={this.handleMouseDown} />
      <Menu handleMouseDown={this.handleMouseDown}
        menuVisibility={this.state.visible} />
      <Header />
      <Container />
      <Route path="/" exact component={PageShell(Subscribe)}></Route>
      <Route path="/thanks" exact component={PageShell(ThankYou)}></Route>
      </div>;
    }
}
export default App;
