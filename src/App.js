import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './components/redux/store';

// import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Product from './components/modal/Product';
import Login from './components/auth/Login';
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
