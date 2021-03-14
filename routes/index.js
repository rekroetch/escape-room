const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('passport');
const jwt = require('jsonwebtoken');

// sign up routes
router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);
  
// login route
router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
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
    )(req, res, next);
  }
);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
