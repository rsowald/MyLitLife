const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//If using a db (Option 1), find user by "user.id" on line 6.
passport.serializeUser(function (user, done) {
  done(null, user);
});

//If using a db (Option 1), find user by "id" instead of "user" on line 10.
passport.deserializeUser(function (user, done) {
  //If adding a db (option 1), add - User.findById(id, function(err, user) {
  done(err, user);
  //});
});

//Google API
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://www.example.com/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {

    // Option 1 - Use profile id to check to see if user is registered in db. Id should contain info like name, email, user profile, etc.
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {

    //Option 2 - Pass the whole profile - Happy to revert back to option 1, but thought for now that option 2 might  be best for this iteration. 
    return done(null, profile);
  }

));