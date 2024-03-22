export const errorHandler = (err, req, res, next) => {
    const error = new Error(err)
    error.status = err.status || 404;
    res.status(error.status).json({ message: error.message})
}