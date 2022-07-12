const Task = require('../models/tasks')

const getAllTasks = async (req, res) =>{
    res.send('All items from the file');
};

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({'msg' : error});
    }
    
};

const getTask = async (req,res) =>{
    res.json({
        id : req.params.id
    })
};

const updateTask = async (req,res) =>{
    res.json(req.body);
};

const deleteTask = async (req,res) =>{
    res.send('Delete Task')
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};