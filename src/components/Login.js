import React from 'react';

function Login() {
  return (
    <div>
      <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="text" name="email"  placeholder='Email'/> <br/>
        </label>
        <label>
          Password:
          <input type="password" name="password"  placeholder='Password'/> <br/>
        </label>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;