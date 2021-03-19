const router = require("express").Router();
const puzzleController = require("../../controllers/puzzleController");

// matches "/api/puzzle/"
router.route("/")
    .get(puzzleController.findAll)

// matches "/api/puzzle/:id"
router.route("/:id")
    .get(puzzleController.findById)
    .put(puzzleController.update)


module.exports = router;    