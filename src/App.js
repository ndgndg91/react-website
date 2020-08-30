import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

class App extends Component {
  render () {
    return (
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />

          <Route
            exact={true}
            path="/about"
            component={About}
          />
          
          <Route
            path="/contact"
            component={Contact}
          />

        </PageWrapper>
      </Router>
    )
  }
}

export default App;
