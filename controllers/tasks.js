

const getAllTasks = async (req, res) =>{
    res.send('All items from the file');
};

const createTask = async (req,res) =>{
    res.json(req.body);
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