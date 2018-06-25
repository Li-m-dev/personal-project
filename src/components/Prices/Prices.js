import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import { getPrices } from "../../ducks/priceReducer";
import { addToCart } from "../../ducks/cartReducer";

class Price extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getPrices();
  }
  render() {
    const clsPasses = this.props.prices
      .filter(pass => {
        return pass.type === "class";
      })
      .map(pass => {
        return (
          <div className="price_row" key={pass.id}>
            <h4> {pass.pass_option}:</h4>
            <div className="pb">
              <h4>${pass.price}</h4>
              <button
                className="buy_btn"
                onClick={() => this.props.addToCart(pass)}
              >
                BUY
              </button>
            </div>
          </div>
        );
      });

    const privatePasses = this.props.prices
      .filter(pass => {
        return pass.type === "private session";
      })
      .map(pass => {
        return (
          <div className="price_row" key={pass.id}>
            <h4>{pass.pass_option}:</h4>
            <div className="pb">
              <h4>${pass.price}</h4>
              <button
                className="buy_btn"
                onClick={() => this.props.addToCart(pass)}
              >
                BUY
              </button>
            </div>
          </div>
        );
      });

    const workshops = this.props.prices
      .filter(pass => {
        return pass.type === "workshop";
      })
      .map(pass => {
        return (
          <div className="price_row" key={pass.id}>
            <h4>{pass.pass_option}:</h4>
            <div className="pb">
              <h4>${pass.price}</h4>
              <button
                className="buy_btn"
                onClick={() => this.props.addToCart(pass)}
              >
                BUY
              </button>
            </div>
          </div>
        );
      });
    const therapy = this.props.prices
      .filter(pass => {
        return pass.type === "yoga therapy";
      })
      .map(pass => {
        return (
          <div className="price_row" key={pass.id}>
            <h4>{pass.pass_option}:</h4>
            <div className="pb">
              <h4>${pass.price}</h4>
              <button
                className="buy_btn"
                onClick={() => this.props.addToCart(pass)}
              >
                BUY
              </button>
            </div>
          </div>
        );
      });

    return (
      <div className="price_container">
        <div className="page_title"> PRICES </div>
        <div className="price_list">
          <img
            className="price_img"
            src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fyoga-class.jpeg?alt=media&token=0cfdfa19-62c4-4b96-b3a5-d91b99acbae0"
            alt="classes"
          />
          <div className="price_detail">
            <h3> CLASS PASS: </h3>
            {clsPasses}
          </div>
        </div>

        <div className="price_list">
          <img
            className="price_img"
            src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fworkshop3.jpeg?alt=media&token=2a155104-bc00-46e3-9cf7-0ccbd8b712fc"
            alt="workshop"
          />
          <div className="price_detail">
            <h3> WORKSHOPS:</h3>
            {workshops}
          </div>
        </div>

        <div className="price_list">
          <img
            className="price_img"
            src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fprivate%20yoga.jpeg?alt=media&token=65f49185-f643-4dfe-aebe-8b3db2e5c8fc"
            alt="private yoga"
          />
          <div className="price_detail">
            <h3> PRIVATE:</h3>
            {privatePasses}
          </div>
        </div>

        <div className="price_list">
          <img
            className="price_img"
            src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fangie%20theropy.jpg?alt=media&token=d9e316a1-9946-47e8-9f2b-d51c16321e2e"
            alt="therapy"
          />
          <div className="price_detail">
            <h3> TREATMENTS: </h3>
            {therapy}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.prices,
    ...state.cart
  };
};

export default connect(
  mapStateToProps,
  { getPrices, addToCart }
)(Price);
