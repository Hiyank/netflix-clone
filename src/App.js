import React from "react";
import "./App.css";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="login-container">
        <h1 className="logo">NETFLIX</h1>

        <div className="login-box">
          <h2>Sign In</h2>

          <form>
            <input type="email" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Sign In</button>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Need help?</a>
            </div>
          </form>

          <p className="signup">
            New to Netflix? <span>Sign up now.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
