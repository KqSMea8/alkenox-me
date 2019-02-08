import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

import { Fade } from 'react-reveal'

import '../styles/n0-x.styles.scss'


class SiteNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="lg" fixed='top' className='site-nav'>
          <NavbarBrand href="/">
            <Button color='link' block outline>
              alkenox-me
            </Button>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-center" navbar>


              <NavItem>

                <Link to="/content-creation" exact>
                  <Button color='link' block outline>
                    Content Creation
                  </Button>
                </Link>

              </NavItem>

              <NavItem>

                <Link to="/about-us" exact>
                  <Button color='link' block outline>
                    About Us
                  </Button>
                </Link>

              </NavItem>

              <NavItem>

                <Link to="/contact-us" exact>
                  <Button color='link' block outline>
                    Contact Us
                  </Button>
                </Link>

              </NavItem>



              {/*
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Options
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                  Option 1
                  </DropdownItem>
                  <DropdownItem>
                  Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  Reset
                  </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
              */}

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SiteNav
