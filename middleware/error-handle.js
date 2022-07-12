const {CustomError} = require('../errors')

const errorHandlerMiddleware = (err, req, res, next) =>{
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({'message' : err.message})
    }
    return res.status(500).json({'message' : 'Something is wrong, please try again :('})
}

module.exports = errorHandlerMiddleware;