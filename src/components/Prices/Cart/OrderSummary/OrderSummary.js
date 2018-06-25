import React, { Component } from "react";
import { connect } from "react-redux";

import Checkout from "./Checkout/Checkout";
import getCart from "../../../../ducks/cartReducer";

class OrderSummary extends Component {
  render() {
    console.log(this.props);
    const total = this.props.cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    const order = this.props.cart.map(item => {
      console.log(item.pass_option);
      return (
        <div className="item_list" key={item.id}>
          <div className="item_pass">{item.pass_option}</div>
          <div className="pass_info">
            {`$${item.price}    Qty: ${item.quantity}`}
          </div>
        </div>
      );
    });
    //need to bring the quantity props down from redux to get the total in the page as well
    return (
      <div className="summary_page">
        <div className="page_title"> PAYMENT </div>
        <div className="summary_container">
          <h1>Order Summary:</h1>
          <div className="cart_item">{order}</div>
          <h3>Total:${total}</h3>
          <Checkout
            name={"Radiant Yoga"}
            description={"Thank you for shopping with us!"} // should be pass_type which should be passed by props from redux
            amount={total}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state.cart;

export default connect(
  mapStateToProps,
  { getCart }
)(OrderSummary);
