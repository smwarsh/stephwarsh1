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
      <nav>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/portfolio">Portfolio</Link>
        {' '}
        <Link to="/blog">Blog</Link>
        {' '}
        <Link to="/contact">Contact</Link>
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
