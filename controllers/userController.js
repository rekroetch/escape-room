const db = require("../models");
const passport = require("../auth/auth.js");
const jwt = require("jsonwebtoken");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  login: function(req, res, next) {
    passport.authenticate(
      "login",
      async (err, user, info) => {
          try {
              if (err || !user) {
                  const error = new Error('An error occurred.');
                  
                  return next(error);
              }
          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);
              
              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');
              
              return res.json({ token });
            }
            );
          } catch (error) {
            return next(error);
          }
      }
      // what does this next do?
    )(req, res, next);
  },

  signup: function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
  })
      .then(() => {
          res.redirect(307, "/api/user/login");
      })
      .catch(err => {
          res.status(401).json(err);
      });
  },

  logout: function(req,res) {
    req.logout();
    res.redirect("/");
  }

};
