const cors = require('cors')


const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);


const app = express();
// const bodyParser = require('body-parser');
const path = require("path");

app.use(cors());

//port
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

const router = require("./routes");


// Needs to be changed to whatever we call the uri and collection
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/user",
  collection: "books",
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
    // store: store,
    resave: true,
    saveUninitialized: true,
  })
);

//After logout
app.get('/', (req, res) => res.send('You are no longer logged in.'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname,  'index.html'));
});

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
