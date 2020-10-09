import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
        <span> 'hello' {this.context.user.name}</span>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="nav-link-container">
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/register">
          Sign up
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="nav-bar">
        <h1>
          <Link to="/">Tentare</Link>
        </h1>
        <span class="flag-icon flag-icon-it"></span>

        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Header;
