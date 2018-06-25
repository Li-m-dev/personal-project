let id = 1;

const getCart = (req, res) => {
  res.status(200).json(req.session.cart);
};

const addToCart = (req, res) => {
  const inCart = req.session.cart.find(item => item.id === req.body.id);
  if (inCart) {
    inCart.quantity++;
  } else {
    const cartItem = {
      ...req.body,
      quantity: 1
    };
    req.session.cart.push(cartItem);
    id++;
  }
  res.status(200).json(req.session.cart);
};

const deleteFromCart = (req, res) => {
  const filtered = req.session.cart.filter(
    item => item.id !== parseInt(req.params.id)
  );
  req.session.cart = filtered;
  res.status(200).json(req.session.cart);
};

const changeQuantity = (req, res) => {
  // console.log(req.body);
  // console.log("session: ", req.session);
  // const newQuantity = req.session.cart.quantity;
  const updateItem = req.session.cart.find(item => {
    // console.log(item);
    return item.id === req.body.id;
  });
  // console.log("update: ", updateItem);
  if (updateItem) {
    updateItem.quantity = req.body.qty;
  }
  // console.log("after:", updateItem);
  res.status(200).json(req.session.cart);
};

module.exports = {
  getCart,
  addToCart,
  deleteFromCart,
  changeQuantity
};
