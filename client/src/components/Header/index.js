import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="hero-head">
      <div className="navbar">
        <Link to="/" className="navbar-item" style={{ fontSize: '2rem' }}>
          Happy Panda
        </Link>
        <div className="navbar-item navbar-end is-white">
          {Auth.loggedIn() ? (
            <>
              <Link className="navbar-item navbar-end is-light is-mobile" to="/note">
                <button className="button navbar-item navbar-end is-white">
                  Notes
                </button>
              </Link>
              <button className="button navbar-item navbar-end is-white" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="navbar-item navbar-end is-light is-mobile" to="/login">
                Login
              </Link>
              <Link className="navbar-item navbar-end is-light" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
