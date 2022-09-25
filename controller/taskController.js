const TaskModel = require('../model/Task')
const moment = require('moment');

// function to show home page
exports.home = async (req, res) => {
    TaskModel.find({}, function(err, tasks) {
        if (err) {
            console.log("Error in fetching Tasks");
        }
        // console.log(tasks);
        res.render('index', {
            tasks: tasks
        });
    });
   
}

// function to create task
exports.create = async (req, res) => {
    const todoTask = new TaskModel({
        description: req.body.description,
        due_date: moment(req.body.due_date).format("MMM Do YYYY"),
        category: req.body.category
    });
    try {
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
   
}

// function to delete task
exports.delete = async (req, res) => {
    var id = req.body;
    // to check the number of tasks to be deleted
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        //Deleting the task from the database by using their individual ids
        TaskModel.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log("Error in deleting the task from DB");
            }
        });
    }
    return res.redirect('back');
   
}