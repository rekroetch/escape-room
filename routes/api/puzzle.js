const puzzleController = require("../../controllers/puzzleController");

const router = require("express").Router();
const puzzleController = require("../../controllers/puzzleController");

// matches "/api/puzzle/:id"
router.route("/:id")
    .put(puzzleController.update)