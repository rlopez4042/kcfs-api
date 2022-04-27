const express = require("express");
const router = express.Router();
const Task = require("../models/TaskSchema.js");
const { authenticate } = require("../middleware/authenticate");

//-------------------------------------------- * Sting Routes * -------------------------------------------- //

//Create task for the day
router.post(
  "/",
  authenticate,
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

router.get("/", (req, res) => {
  Task.find().then((task) =>
    res.json({
      status: 200,
      task: task,
    })
  );
});


//Read one task by id
router.get(
  "day/:day",
  authenticate,
  (req, res) => {
    Task.findById(req.params.day).then((task) => {
      res.json({
        status: 200,
        task: task,
      });
    });
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
//Update one sting by ID
router.patch(
  "/:id", 
// authenticate, 
(req, res) => {
//   Task.findById(req.params.id).then((task) => {
//     const data = task.userID;
//     const userID = req.user.id;
//     if (data == userID) {
      // Sting.updateOne(req.params.id, req.body).then((sting) => {
        Task.findByIdAndUpdate(req.params.id, req.body).then((task) => {
        res.json({
          status: 200,
          msg: "Item updated.",
          task: task,
          // id: data,
        });
      });
    // } else {
      // console.log("Cannot patch.");
    }
  // });
// });

//delete this one for authentiction:
)

module.exports = router;
