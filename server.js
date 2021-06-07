require('dotenv').config();

const cors = require('cors');
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//port
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MyLitLife", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
app.use(router);

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

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
