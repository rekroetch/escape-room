const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport')
      
// Matches with "/api/user"
router.route("/")
  // dont think we use this
  .get(userController.findAll)

// Matches "/api/user/login" 
router.route("/login")
  .post(userController.login)

// "/api/user/signup"
router.route("/signup")
  .post(userController.signup)

// "/api/user/logout"
router.route("/logout")
  .get(userController.logout)

// "/api/user/validate"
router.route("/validate")
  .get(passport.authenticate("jwt", {session: false}),(req, res) => {
    if (req.user) {
      res.json({email: req.user.email})
    } else {
      res.json({email: "no user"})
    }
  }) 


module.exports = router;
