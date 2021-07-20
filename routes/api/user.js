const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport')
      
// Matches with "/api/user/"
router.route("/")
  .get(userController.findAll)

// router.route("/:id")
//   .get(userController.findById)

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
      res.json(req.user)
    } else {
      res.json({username: "no user"})
    }
  }) 

router.route("/update/:id")
  .put(userController.update)

module.exports = router;
