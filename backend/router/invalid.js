export const invalid = (req, res, next) => {
    const err = new Error("Path not found!")
    err.status = 404;
    next(err)
}