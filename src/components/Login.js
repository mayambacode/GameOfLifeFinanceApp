import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="text" name="email" /> <br/>
        </label>
        <label>
          Password:
          <input type="password" name="password" /> <br/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;