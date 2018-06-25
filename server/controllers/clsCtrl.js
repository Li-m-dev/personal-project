const getClasses = (req, res, next) => {
  req.app
    .get("db")
    .get_classes()
    .then(response => {
      res.status(200).json(response);
    });
};

const addClass = (req, res, next) => {
  const { type, start, endtime, level, instructorid } = req.body;
  console.log(req.body);
  req.app
    .get("db")
    .add_class([type, start, endtime, level, instructorid])
    .then(response => {
      console.log("response!!!!   ", response);
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const deleteClass = (req, res, next) => {
  // console.log(req.params);
  const { id } = req.params;
  req.app
    .get("db")
    .delete_class([id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

module.exports = {
  getClasses,
  addClass,
  deleteClass
};
