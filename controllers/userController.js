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
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
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


          //     req.login(
          //         user,
          //         { session: false },
          //         async (error) => {
          //             if (error) {
          //                 return next(error);
          //             }
          //             const payload = {
          //                 id: user.id,
          //                 email: user.email,
          //                 firstName: user.firstName,
          //                 lastName: user.lastName
          //             }
          //             const options = {
          //                 subject: `${user.id}`,
          //                 expiresIn: 3600
          //             }
          //             const token = jwt.sign({ user: payload }, 'TOP_SECRET', options);
          //             return res.json({ token });
          //         }
          //     );
          // } catch (err) {
          //     return err;
          // }
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
  },
  // create: function(req, res) {
  //   db.User
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
