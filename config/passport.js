var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work


passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

module.exports = function (passport) {
  // console.log("passport loading");

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    // console.log("user.uuid",user.uuid);
    done(null, user.uuid);
  });

  // used to deserialize the user
  passport.deserializeUser(function (uuid, done) {
    db.Accounts.findById(uuid).then(function (user) {

      if (user) {

        done(null, user.get());

      } else {
        // console.log("user.errors", user.errors)
        done(user.errors, null);

      }

    });
  });


  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and account_key, we will override with username
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, username, password, done) {
      // console.log("%%%%%%%%%%%%%%%%%",req.body);
      // asynchronous
      // User.findOne wont fire unless data is sent back
      process.nextTick(function () {
        // console.log("test");
        // find a user whose username is the same as the forms username
        // we are checking to see if the user trying to login already exists

        db.Users.findOne({
          where: {
            username: username
          }
        }).then(function (user, err) {
          if (err) {
            console.log("err", err)
            return done(err);
          }

          // check to see if theres already a user with that username
          if (user) {

            console.log('signupMessage', 'That username is already taken.');
            return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
          } else {
            // console.log("creating");
            // if there is no user with that username
            // create the user
            db.Users.create({
              username: req.body.username,
              password: req.body.password,
              account_key: db.Users.generateHash(password)

            }).then(function (dbUser) {
              //console.log("created result: ", dbUser);
              // send post back to render
              return done(null, dbUser);

            }).catch(function (err) {
              // handle error;
              console.log(err);
            });
          }
        });
      });

    }));

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and account_key, we will override with username
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, username, password, done) { // callback with username and account_key from our form

      db.Users.findOne({
        where: {
          username: req.body.username
        }
      }).then(function (user, err) {
     

        if (!user) {
          console.log("no user found");
          return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
        }


        // if the user is found but the account_key is wrong
        if (user && !user.validPassword(req.body.account_key)) {

          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
        }

        // all is well, return successful user

        return done(null, user);

        // all is well, return successful user

      });

    }));

};