const Auth0Strategy = require("passport-auth0");

const start = new Auth0Strategy(
  {
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/login",
    scope: "openid email profile"
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
  }
);

const getUser = (req, res) => {
  // if (!req.user) {
  //   res.status(403).json("oops");
  // } else {
  req.app
    .get("db")
    .getUserByAuthid(req.user.authid)
    .then(response => {
      res.status(200).json(response);
    });
  // }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect(process.env.REACT_APP_HOME_URL);
  });
};

module.exports = {
  start,
  getUser,
  logout
};
