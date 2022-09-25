const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");


router.get('/', taskController.home);
router.post('/add-task', taskController.create);
router.post('/delete-task', taskController.delete);

module.exports = router;