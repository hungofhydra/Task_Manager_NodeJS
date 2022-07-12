require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tasks', tasks);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Connected to DB success. Server is listening in ${PORT}...`));
    }
    catch (error) {
        console.log(error);
    }
}

start();
