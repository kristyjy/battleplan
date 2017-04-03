import React from 'react'
import { Navbar } from 'reactstrap';
import './Header.scss'

export default class Header extends React.Component {

  render() {
    return (
      <Navbar color="faded" light toggleable>
        <div className='navbar-brand'>
          Battle Plan
        </div>
      </Navbar>
    );
  }
}
