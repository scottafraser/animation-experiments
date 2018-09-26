import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Pages.scss'

import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Third from "./Third";


function Container({ location }) {
    return <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      </div>;
}

export default withRouter(Container);