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
        <ul className="navbar-nav">
          <li key="0" className="nav-item"><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li key="1" className="nav-item"><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li key="2" className="nav-item"><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
          <li key="3" className="nav-item"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
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
