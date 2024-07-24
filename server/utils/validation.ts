import { body, validationResult } from 'express-validator';

export const validateState = [
    body('name').isString().withMessage('Name must be a string'),
    body('description').isString().withMessage('Description must be a string'),
    body('status').isString().withMessage('Status must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
