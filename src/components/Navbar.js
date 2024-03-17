import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/chat">Chat</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;