const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./utils/passportSetup');

app.use(cors());

//parse app - urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse app - JSON
app.use(bodyParser.json());

//Cookies - added a new npm package (cookie-sessions)
app.use(cookieSession({
  name: 'my-lit-life-session',
  keys: ['key1', 'key2']
}))

//Middleware - login next steps & 401 page (not authorized)
const userLoggedIn = (res, req, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};




//Starting session:

//Auth
app.use(passport.initialize());
//Use sessions
app.use(passport.session());

//port
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

const router = require("./routes");


// Needs to be changed to whatever we call the uri and collection
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/user",
  collection: "",
});

store.on("error", (error) => {
  console.log(error);
});

app.use(
  session({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day before they have to log back in
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);
//Google login authentication - scope
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

//Successful login path - *** would like ti to say welcome one the first time loggining in....then welcome back based on the users login history. Will do a little more digging on how to write that out in the next itteration.
app.get('/success', (req, res) => res.send(`Welcome back, ${req.user.email}!`));

//Failed to login route
app.get('/failed', (req, res) => res.send('Something went wrong. Please reattempt to login.'));

//After logout
app.get('/', (req, res) => res.send('You are no longer logged in.'));

//Successful login route
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
