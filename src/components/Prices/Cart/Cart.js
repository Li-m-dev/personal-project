import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../../../ducks/userReducer";

// import { getPrices } from "../../ducks/priceReducer";
import {
  getCart,
  deleteFromCart,
  changeQuantity
} from "../../../ducks/cartReducer";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    // console.log(this.props);
    this.props.getCart();
    this.props.getUser();
  }

  handleUpdate(id, qty) {
    this.props.changeQuantity(id, qty).then(res => {
      this.props.getCart();
    });
  }

  handleInput(value) {
    this.setState({ input: value });
  }

  render() {
    console.log(this.props);
    const total = this.props.cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    const cart = this.props.cart.map(item => {
      return (
        <div className="item_list" key={item.id}>
          <div className="item_pass">{item.pass_option}</div>
          <div className="pass_info">
            {`$${item.price} Qty: `}
            <input
              type="text"
              defaultValue={item.quantity}
              onChange={e => {
                this.handleInput(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button
              className="edit_btn"
              onClick={() =>
                this.handleUpdate(item.id, parseInt(this.state.input, 10))
              }
            >
              OK
            </button>
            <button
              className="edit_btn"
              onClick={() => this.props.deleteFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="page_title"> CART </div>
        {cart[0] ? (
          <div className="cart_container">
            <h1>YOUR RADIANT YOGA STUDIO SHOPPING BAG</h1>
            <div className="cart_item">{cart}</div>
            <div className="cart_bottom">
              <h3>Total: ${total} </h3>
              <Link to="/prices">
                <h4>Continue Shopping</h4>
              </Link>
              <Link to={this.props.user[0] ? "/summary" : "/login"}>
                <button className="ckout_btn">CHECK OUT</button>
              </Link>
            </div>
            {/* here is another way to link to the auth0 login page directly,
        but the users don't have an option to back out if they don't want to login */}
            {/* <a
          href={
            this.props.user[0]
              ? "http:localhost:3000/#/checkout"
              : process.env.REACT_APP_LOGIN_URL
          }
        >
          <button>CHECK OUT</button>
        </a> */}
          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.cart,
    ...state.user
  };
};

export default connect(
  mapStateToProps,
  { getCart, deleteFromCart, changeQuantity, getUser }
)(Cart);
