import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

// pages
import Blog from './../Blog/Blog';
import Contact from './../Contact/Contact';
import Portfolio from './../Portfolio/Portfolio';
import Home from './../Home/Home';

function App() {
  return (
    <div>
      <Nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="navbar-nav">
          <NavLink to="/" exact={true} className="nav-item" activeClassName="active">Home</NavLink>
          <NavLink to="/portfolio" className="nav-item" activeClassName="active">Portfolio</NavLink>
          <NavLink to="/blog" className="nav-item" activeClassName="active">Blog</NavLink>
          <NavLink to="/contact" className="nav-item" activeClassName="active">Contact</NavLink>
        </div>
      </Nav>

      <main>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
