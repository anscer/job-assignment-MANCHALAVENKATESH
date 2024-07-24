import { Request, Response } from 'express';
import State from '../models/stateModel';

export const createState = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, status, createdBy } = req.body;
        
        // Ensure required fields are provided
        if (!name || !description || !status || !createdBy) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const state = new State({
            name,
            description,
            status,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy
        });

        const newState = await state.save();
        res.status(201).json(newState);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
    }
};

export const getStates = async (req: Request, res: Response): Promise<void> => {
    try {
        const states = await State.find();
        res.status(200).json(states);
    } catch (err) {
        const error = err as Error
        res.status(400).json({ message: error.message });
    }
};

export const updateState = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedState = await State.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedState);
    }catch (err) {
        const error = err as Error
        res.status(400).json({ message: error.message });
    }
};

export const deleteState = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await State.findByIdAndDelete(id);
        res.status(200).json({ message: 'State deleted successfully' });
    } catch (err) {
        const error = err as Error
        res.status(400).json({ message: error.message });
    }
};


