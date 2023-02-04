import express from 'express';
import { getAllTasks } from './taskController';

export const taskRouter = express.Router();

taskRouter.route('/').get(getAllTasks);
