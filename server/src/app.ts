import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import stateRoutes from './routes/stateRoutes';
import userRoutes from './routes/userRoutes';
import './config/passportConfig';

const app = express();

app.use(express.json());

app.use(session({
    secret: 'ROBOTICS',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', stateRoutes);
app.use('/auth', userRoutes);

mongoose.connect('mongodb://localhost:27017/robotic')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

export default app;
