import React from 'react';
import { IndexLink } from 'react-router';
import { Navbar } from 'reactstrap';

export default class Header extends React.Component {

  render() {
    return (
      <Navbar color="faded" light toggleable>
        <IndexLink to="/" className="navbar-brand">
          Battle Plan
        </IndexLink>
      </Navbar>
    );
  }
}
