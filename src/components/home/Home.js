import React, { Component } from 'react'
import { Tabs, Tab} from 'react-bootstrap'

// Importing all the Home Components here
import HomeCarousel from './components/homeCarousel/HomeCarousel'

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <HomeCarousel />

      </React.Fragment>
    )
  }
}

export default Home
