import { Request, Response } from 'express';
import User from '../models/userModel';
import passport from 'passport';




export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};



export const loginUser = (req: Request, res: Response): void => {
   
    passport.authenticate('local', (err: any, user: any, info: any) => {
        
        if (err){
        return res.status(400).json({ message: err.message });
        }
        if (!user) return res.status(400).json({ message: info.message });
        req.logIn(user, (err) => {
            if (err) return res.status(400).json({ message: err.message });
            return res.status(200).json({ message: 'Login successful' });
        });
    })(req, res);
};

export const logoutUser = (req: Request, res: Response): void => {
    req.logout((err) => {
        if (err) return res.status(400).json({ message: err.message });
        res.status(200).json({ message: 'Logout successful' });
    });
};
