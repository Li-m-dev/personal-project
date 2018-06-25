require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const port = process.env.PORT || 3001;
const {
  start,
  getUser,
  logout
} = require(`${__dirname}/controllers/authCtrl.js`);

const { getWeather } = require(`${__dirname}/controllers/weatherCtrl.js`);

const {
  getInstructors,
  getInstr,
  addInstructor,
  deleteInstructor
} = require(`${__dirname}/controllers/instructorCtrl`);

// const { getUsers, addUser } = require(`${__dirname}/controllers/userCtrl`);
const {
  getClasses,
  addClass,
  deleteClass
} = require(`${__dirname}/controllers/clsCtrl`);
const { getPrices } = require(`${__dirname}/controllers/priceCtrl.js`);

const {
  getCart,
  addToCart,
  deleteFromCart,
  changeQuantity
} = require(`${__dirname}/controllers/cartCtrl`);

const {
  getEvents,
  addEvent,
  deleteEvent
} = require(`${__dirname}/controllers/eventCtrl.js`);

// charge function from stripeCtrl
const { charge } = require(`${__dirname}/controllers/stripeCtrl`);
const { mailer } = require(`${__dirname}/controllers/mailerCtrl`);

const app = express();
app.use(express.static(`${__dirname}/../build`));

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    console.log("database is connecting");
    app.set("db", db);
  })
  .catch(err => {
    app.set("db", db);
    console.log(err);
  });

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.use((req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  // console.log(req.session);
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(start);

passport.serializeUser((user, done) => {
  // console.log(user);
  app
    .get("db")
    .getUserByAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addUserByAuthid([
            user.displayName,
            user.emails[0].value,
            user.id,
            user.picture
          ])
          .then(res => done(null, res[0]))
          .catch(error => console.log(error));
      } else return done(null, response[0]);
    })
    .catch(error => console.log(error));
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

//endpoints
//Auth endpoints
app.get(
  "/login",
  passport.authenticate("auth0", {
    // successReturnToOrRedirect: "http://localhost:3000/#/",
    successReturnToOrRedirect: "/#/",
    failureRedirect: "/login"
  })
);

// app.get("/login", function(req, res, next) {
//   passport.authenticate("auth0", function complete() {
//     if (options.successReturnToOrRedirect) {
//       var url = options.successReturnToOrRedirect;
//       if (req.session && req.session.returnTo) {
//         url = req.session.returnTo;
//         delete req.session.returnTo;
//       }
//       return res.redirect(url);
//     }
//     if (options.successRedirect) {
//       return res.redirect(options.successRedirect);
//     }
//     next();
//   })(req, res, next);
// });

app.get("/api/user", getUser);
app.get("/logout", logout);

// weather
app.get("/api/weather", getWeather);
//users
// app.get("/api/users", getUsers);
// app.post("/api/user", addUser);
//instructors
app.get("/api/instructors", getInstructors);
app.get("/api/instructor/:instructorid", getInstr);
app.post("/api/addinstructor", addInstructor);
app.delete("/api/instructor/:instructorid", deleteInstructor);
//classes
app.get("/api/classes", getClasses);
app.post("/api/addclass", addClass);
app.delete("/api/classes/:id", deleteClass);
//events
app.get("/api/events", getEvents);
app.post("/api/addevent", addEvent);
app.delete("/api/event/:id", deleteEvent);
//passes
app.get("/api/prices", getPrices);
//cart
app.get("/api/cart", getCart);
app.post("/api/cart", addToCart);
app.delete("/api/cart/:id", deleteFromCart);
app.put("/api/cart", changeQuantity);

//endpoints for stripe
app.post("/", charge);

//endpoints for nodemailer
app.post("/send", mailer);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
