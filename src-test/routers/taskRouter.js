import express from 'express';
import { getAllTasks, createTask } from '../controllers/taskController.js';

export const taskRouter = express.Router();

taskRouter.route('/').get(getAllTasks).post(createTask);
