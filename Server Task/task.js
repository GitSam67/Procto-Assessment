const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    pId:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;