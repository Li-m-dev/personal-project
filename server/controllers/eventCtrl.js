const getEvents = (req, res, next) => {
  req.app
    .get("db")
    .get_events()
    .then(response => {
      res.status(200).json(response);
    });
};

const addEvent = (req, res, next) => {
  const { event_name, date, time, price, about, img } = req.body;
  //   console.log(req.body);
  req.app
    .get("db")
    .add_event([event_name, date, time, price, about, img])
    .then(response => {
      //   console.log("response!!!!   ", response);
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const deleteEvent = (req, res, next) => {
  // console.log(req.params);
  const { id } = req.params;
  req.app
    .get("db")
    .delete_event([id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

module.exports = {
  getEvents,
  addEvent,
  deleteEvent
};
