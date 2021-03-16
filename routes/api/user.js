const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport')
      
// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  // .post(userController.create);

// Matches "/api/user/login" 
router.route("/login")
  .post(userController.login)

router.route("/signup")
  .post(userController.signup)

router.route("/logout")
  .get(userController.logout)

router.route("/validate")
  .get(passport.authenticate("jwt", {session: false}),(req, res) => {
    if (req.user) {
      res.json({email: req.user.email})
    } else {
      res.json({email: "no user"})
    }
  }) 


module.exports = router;
