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
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({'msg' : error});
    }
};

const deleteTask = async (req,res) =>{
    try {
        const task = await Task.findOneAndDelete({_id : req.params.id}).exec();
        if (!task) {
            return res.status(404).json({'message' : `No task with id ${req.params.id}`});
        }
        res.status(200).json({ 
            'message' : 'Delete success',
            'task' : null
        });
    } catch (error) {
        res.status(500).json({'msg' : error});
    }
};

const updateTask = async (req,res) =>{
    try {

        const task = await Task.findOneAndUpdate({_id : req.params.id}, req.body, 
            {new:true, runValidators: true});
        if (!task) {
            return res.status(404).json({'message' : `No task with id ${req.params.id}`});
        }
        res.status(200).json({ 'message' : 'Update completed', 'id' : req.params.id, 'data' : req.body});
    } catch (error) {
        res.status(500).json({'msg' : error});
    }
    res.status(200).send();
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};