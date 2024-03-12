import React from 'react';
import { NavLink } from 'react-router-dom';
function Signup() {
  return (
    <div>
      <h2>Let's Get Started</h2> <br/>
      <h4>Sign Up Your Account</h4> <br />
      
      <NavLink to="/signup">Sign up with email</NavLink> <br/>//button
      <NavLink to="/signup">Sign up with Google</NavLink> <br/>//button
      <NavLink to="/signup">Sign up with Apple</NavLink> <br/> //button
     


      <p>Already have an account <NavLink to="/login">Login</NavLink> </p>
    </div>
  );
}