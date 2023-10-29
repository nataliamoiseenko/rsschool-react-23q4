import React from 'react';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <img
          src="../src/assets/sw-logo.png"
          alt="sw-logo"
          className="header__logo"
        />
        <h1>An API with Data from the Star Wars Universe</h1>
      </div>
    );
  }
}

export default Header;
