import express from 'express';
import { getAllTasks, createTask } from '../controllers/taskController';

export const taskRouter = express.Router();

taskRouter.route('/').get(getAllTasks).post(createTask);
