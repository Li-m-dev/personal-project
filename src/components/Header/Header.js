import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Weather from "./Weather/Weather";
import LoginBtn from "./LoginBtn/LoginBtn";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { getUser } from "../../ducks/userReducer";
import { getCart } from "../../ducks/cartReducer";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState(
      {
        showMenu: true
      },
      () => {
        document.addEventListener("click", this.closeMenu);
      }
    );
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  getWeather() {
    axios.get("/api/weather").then(response => {
      // console.log(response.data);
      this.setState({
        weather: [response.data]
      });
    });
  }
  componentDidMount() {
    // console.log("weather is mounting...");
    this.getWeather();
    this.props.getUser();
  }

  render() {
    // console.log(this.props);
    const quantity = this.props.cart.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );

    const button = this.props.user[0] ? <LogoutBtn /> : <LoginBtn />;

    let weather = this.state.weather.map((elem, i) => {
      // console.log(elem);
      return (
        <div key={i}>
          <Weather obj={elem} />
        </div>
      );
    });
    return (
      <div className="nav_bar">
        <div className="navbar__left">
          <Link className="logo" to="/">
            <img
              className="logo__img"
              src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/logo.png?alt=media&token=053e8ad8-3a83-4c3a-a8a2-12b3a432f5bb"
              alt="radiant yoga"
            />
          </Link>
          <div>{weather}</div>
        </div>

        <div className="menu">
          <div className="menu_log">
            <a className="header_btn" onClick={this.showMenu}>
              Menu
            </a>
            {this.state.showMenu ? (
              <div className="menu_list">
                <Link to="/">
                  <p>Home</p>
                </Link>
                <Link to="/classes">
                  <p>Classes</p>
                </Link>
                <Link to="/prices">
                  <p>Prices</p>
                </Link>
                <Link to="/events">
                  <p> Events</p>
                </Link>
                <Link to="/instructors">
                  <p>Instructors</p>
                </Link>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
                <Link to="/cart">
                  <p>Cart </p>
                </Link>
              </div>
            ) : null}
            <div>{button}</div>
            <Link className="nav_cart" to="/cart">
              <p>Cart: {quantity} </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user,
    ...state.cart
  };
};

export default connect(
  mapStateToProps,
  { getUser, getCart }
)(Header);
