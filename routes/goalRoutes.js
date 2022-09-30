const express = require("express");
const router = express.Router();
const goalsController = require("../controllers");

const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(protect, goalsController.getGoals)
  .post(protect, goalsController.setGoals);

router
  .route("/:id")
  .put(protect, goalsController.putGoals)
  .delete(protect, goalsController.deleteGoals);

module.exports = router;
