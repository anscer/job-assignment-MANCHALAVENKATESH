import { Router } from 'express';
import {
    createState,
    getStates,
    updateState,
    deleteState
} from '../controllers/stateController';
import { ensureAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

// Protect the following routes with authentication
router.post('/states', ensureAuthenticated, createState);
router.get('/states', ensureAuthenticated, getStates);
router.put('/states/:id', ensureAuthenticated, updateState);
router.delete('/states/:id', ensureAuthenticated, deleteState);

export default router;
