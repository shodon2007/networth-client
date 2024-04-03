const ApiError = require('../exceptions/api-error');

module.exports = (err, req, res, next) => {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors, status: err.status});
    }

    return res.status(500).json({message: 'Непредвиденная ошибка', status: 500});
}