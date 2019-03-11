import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

// Import the CSS file here
import './MainNavigation.css'

class MainNavigation extends Component {
  render() {

    return (
      <Navbar sticky='top' expand='lg' fixed='top'>
        <Navbar.Brand href='/'>Johnson Town SDA Church</Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar-nav' />
        <Navbar.Collapse id='main-navbar-nav'>
          <Nav id='main-navigation' className='ml-auto navbar-nav'>

            {/* Direct link to the YouTube page */}
            <Nav.Link href='https://www.youtube.com/channel/UCN4mZ6rsv_KzUCRj4xbag_g' data-toggle='tooltip'
            data-placement='top' title='Watch us on YouTube!' data-html='true'
            target='_blank'>

                {/* Displays the YouTube icon here */}
                <i className='fa fa-youtube-play'></i>
            </Nav.Link> {/* End Youtube Link */}

            {/* The About Dropdown holds several links to external websites. It is important to open */}
            {/* the page in a different tab to not redirect them from the main website*/}
            <NavDropdown title='About'>

              {/* Links to the EJC website */}
              <NavDropdown.Item href='http://www.ejcsda.com/about/' target='_blank'>
                East Jamaica Conference
              </NavDropdown.Item>

              {/* Links to the InterAmerican Divisiton website */}
              <NavDropdown.Item href='https://www.interamerica.org/' taget='_blank'>
                InterAmerican Division
              </NavDropdown.Item>

              {/* Links to the Adventist World website */}
              <NavDropdown.Item href='https://www.adventistworld.org/' targer='_blank'>
                Adventist World
              </NavDropdown.Item>

            </NavDropdown>  {/* End About Dropdown */}

            {/* Photo Gallery ..  */}
            <Nav.Link href='/photoGallery'>Photo Gallery</Nav.Link>

            {/* Feed - For instagram and Facebook */}
            <NavDropdown title='Feed'>

              {/* instagram */}
              <NavDropdown.Item href='/instagramFeed'>
                Instagram
              </NavDropdown.Item>

              {/* Facebook */}
              <NavDropdown.Item href='/facebookFeed'>
                Facebook
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='/news'>News</Nav.Link>
            <Nav.Link href='/downloads'>Downloads</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainNavigation
