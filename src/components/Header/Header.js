import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.scss'

export default class Header extends React.Component {
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
  /* Save for future nav items
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <IndexLink to='/' activeClassName='route--active' className='nav-link'>
          Home
        </IndexLink>
      </NavItem>
      <NavItem>
        <Link to='/counter' activeClassName='route--active' className="nav-link">
          Counter
        </Link>
      </NavItem>
    </Nav>
  </Collapse>*/
  render() {
    return (
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <IndexLink to='/' className='navbar-brand'>
          Battle Plan
        </IndexLink>
      </Navbar>
    );
  }
}
