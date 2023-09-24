const express = require("express");
const router = express.Router();
const Todo = require("./task");

router.get("/todos", async (req, res) => {

    const todos = await Todo.find();
    if (todos) {
        console.log(todos);
        return res.status(200).send(todos);
    }
    else {
        console.log("No todos found");
        return res.status(422).json({ Error: "No todos found." });
    }
});

router.post("/todo", async (req, res) => {

    const { pId, title, desc, date, time } = req.body;

    if (!(pId && title && desc && date && time)) {
        console.log("Please fill the form correctly..!!");
        return res.status(400).json({ Error: "Please fill the form correctly..!!" });
    }

    try {

        const todo = new Todo({ pId, title, desc, date, time });

            const response = await todo.save()
            if (response) {
                console.log("Task added successfully..!!");
                console.log(response);
                return res.status(200).json({ Message: "Task posted successfully..!!" });
            }
            else {
                console.log("Task posting failed...Please try again..!!");
                return res.status(400).json({ Message: "Task adding failed...Please try again..!!" });
            }
    }
    catch (err) {
        console.log(err);
    }

});

router.put("/todo", async (req, res) => {
    const { pId, title, desc, date, time, todoId } = req.body;
    const todo = await Todo.findOne({ _id: todoId });
    todo.pId = pId;
    todo.title = title;
    todo.desc = desc;
    todo.date = date;
    todo.time = time;
    const response = await todo.save();
    if (response) {
        res.status(200).send(response);
    }
    else {
        res.status(400).json({ Message: "Task updation Unsuccessfull...Try again..!!" });
    }
});

router.delete("/todo", async (req, res) => {
    const { todoId } = req.body;

    const response = await Todo.findOneAndDelete({ _id: todoId });
    if (response) {
        res.status(200).send(response);
    }
    else {
        res.status(400).json({ Message: "Task deletion Unsuccessfull...Try again..!!" });
    }
});

module.exports = router;