import React, { Component } from "react"
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import logo from "./logo.svg"
import "./App.css"

import Home from './components/home/Home'

// Importing the views here
import Header from './views/header/Header'

// Importing the components here
import MainNavigation from './components/mainNavigation/MainNavigation'

class App extends Component {

  // Runs after the component finishes mounting
  componentDidMount = () => {
    document.title = 'Johnson Town SDA Church'
  }

  render() {
    return (
      <React.Fragment>

        <Router>
          <div>

            {/* Importing the header here */}
            <Header ref='header'/>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/photoGallery' component={Home} />
              <Route exact path='/news' component={Home} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
