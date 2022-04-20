const express = require("express");
const router = express.Router();
const Task = require("../models/TaskSchema.js");
const { authenticate } = require("../middleware/authenticate");

//-------------------------------------------- * Sting Routes * -------------------------------------------- //

//Create task for the day
router.post(
  "/",
  // authenticate,
  (req, res) => {
    const data = req.body;
    const userID = req.user.id;
    Task.create(data).then((task) =>
      res.json({
        status: 200,
        task: task,
        user: userID,
      })
    );
  }
);

//Read one task by day
router.get(
  "/:id",
  // authenticate,
  (req, res) => {
    Task.findById(req.params.id).then((task) => {
      res.json({
        status: 200,
        task: task,
      });
    });
  }
);

module.exports = router;
