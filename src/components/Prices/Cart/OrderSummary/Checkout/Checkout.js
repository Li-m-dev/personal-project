import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import PAYMENT_SERVER_URL from "../../../../../constants/pmturl";

const CURRENCY = "USD";

const fromUsdToCent = amount => amount * 100;

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment error");
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUsdToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUsdToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
