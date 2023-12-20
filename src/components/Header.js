import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  let [status, setStatus] = new useState("Login");

  function switchLoginLogout() {
    status = status == "Login" ? "Logout" : "Login";
    setStatus(status);
    // document.getElementsByClassName('login')[0].innerHTML = document.getElementsByClassName('login')[0].innerHTML == 'Login' ? 'Logout' : 'Login';
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={function () {
              switchLoginLogout();
            }}
          >
            {status}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
