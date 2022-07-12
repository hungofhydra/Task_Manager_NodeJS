const Task = require('../models/tasks')

const getAllTasks = async (req, res) =>{
    try {
        const tasks = await Task.find().exec();
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({'msg' : error});
    }
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
    try {
        const task = await Task.findOne({_id : req.params.id}).exec();
        if (!task) {
            return res.status(404).json({'message' : `No task with id ${req.params.id}`});
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({'msg' : error});
    }
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