import { validationResult } from 'express-validator';

export const validateRequest = ( req, res, next ) => {
    const result = validationResult(req)
    if (result.isEmpty()) {
        return next();
    }
}