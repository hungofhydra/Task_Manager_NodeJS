require('dotenv').config();
const notFound = require('./middleware/not-found');
const express = require('express');
const errorHandlerMiddleware = require('./middleware/error-handle');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB("mongodb+srv://hungofhydra:Hung9090@cluster0.pro4i.mongodb.net/Task_Manager?retryWrites=true&w=majority");
        app.listen(PORT, console.log(`Connected to DB success. Server is listening in ${PORT}...`));
    }
    catch (error) {
        console.log(error);
    }
}

start();
