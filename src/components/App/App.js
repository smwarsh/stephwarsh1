import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

// pages
import Blog from './../Blog/Blog';
import Contact from './../Contact/Contact';
import Portfolio from './../Portfolio/Portfolio';
import Home from './../Home/Home';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <ul className="navbar-nav">
          <li key="0" className="nav-item"><Link to="/">Home</Link></li>
          <li key="1" className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
          <li key="2" className="nav-item"><Link to="/blog">Blog</Link></li>
          <li key="3" className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

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
