import TaskModel from '../models/taskModel';
import express from 'express';
import { Task } from '../interfaces/interfaces';

export const getAllTasks = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const tasks = (await TaskModel.find()) as Task[];

    res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createTask = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const task = await TaskModel.create(req.body) as Task;

    res.status(201).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
