const router = require("express").Router();
const userRoutes = require("./user");
const puzzleRoutes = require("./puzzle")

// user routes
router.use("/user", userRoutes);
router.use("/puzzle", puzzleRoutes);

module.exports = router;
