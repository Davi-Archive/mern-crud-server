const express = require("express");
const router = express.Router();
const goalsController = require("../controllers");

router.route("/").get(goalsController.getGoals).post(goalsController.setGoals);

router
  .route("/:id")
  .put(goalsController.putGoals)
  .delete(goalsController.deleteGoals);

module.exports = router;
