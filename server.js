const cors = require('cors')
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const router = require("./routes");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//port
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MyLitLife", {useNewUrlParser: true});
app.use(router);


const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/MyLitLife",
  collection: "user",
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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
