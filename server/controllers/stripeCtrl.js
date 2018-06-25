const configureStripe = require("stripe");
const stripe = configureStripe(process.env.STRIPE_SECRET_KEY);

const postStripeCharge = (req, res) => (stripeErr, stripeRes) => {
  console.log(stripeRes);
  if (stripeErr) {
    res.status(500).json({ error: stripeErr });
  } else {
    // let db = req.app.get('db')
    // db.run('insert into <table> (money, etc) values ($1, $2)', stripeRes[0])
    // .then(res=>{
    res.status(200).json({ success: stripeRes });
    // })
  }
};

const charge = (req, res) => {
  stripe.charges.create(req.body, postStripeCharge(req, res));
};
module.exports = {
  charge
};
