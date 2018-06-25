const getInstructors = (req, res, next) => {
  req.app
    .get("db")
    .get_instructors()
    .then(response => {
      res.status(200).json(response);
    });
};

const getInstr = (req, res, next) => {
  const { instructorid } = req.params;
  req.app
    .get("db")
    .get_instr([instructorid])
    .then(response => {
      res.status(200).json(response);
    });
};

const addInstructor = (req, res, next) => {
  //   console.log("hit the endpoint");
  console.log(req.body);
  const { name, title, pic, intro } = req.body;
  req.app
    .get("db")
    .add_instructor([name, title, pic, intro])
    .then(response => res.status(200).json(response))
    .catch(error => console.log(error));
};

const deleteInstructor = (req, res, next) => {
  // console.log(req.params);
  const { instructorid } = req.params;
  req.app
    .get("db")
    .delete_instructor([instructorid])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

module.exports = {
  getInstructors,
  getInstr,
  addInstructor,
  deleteInstructor
};
