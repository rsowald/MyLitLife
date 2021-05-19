const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session')
require(''./utils/passportSetup');

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
const userLoggedIn = (res,  req, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStauts(401);
  }
};




//Starting session:

//Auth
app.use(passport.initialize());
//Use sessions
app.use(passport.session());


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
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });


app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});
