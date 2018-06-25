// const getUsers = (req, res, next) => {
//   req.app
//     .get("db")
//     .get_users()
//     .then(response => {
//       res.status(200).json(response);
//     });
// };

// const addUser = (req, res, next) => {
//   const { name, email, remainingClasses, classExpiration, isAdmin } = req.body;
//   req.app
//     .get("db")
//     .add_user([name, email, remainingClasses, classExpiration, isAdmin])
//     .then(response => res.status(200).json(response))
//     .catch(error => console.log(error));
// };

// module.exports = {
//   getUsers,
//   addUser
// };

// edit users's info here, delete the get users and add users,
//because the auth0 brings the users in
