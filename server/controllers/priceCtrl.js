const getPrices = (req, res, next) => {
  req.app
    .get("db")
    .get_prices()
    .then(response => {
      res.status(200).json(response);
    });
};

module.exports = {
  getPrices
};
