import Task from './taskModel';
import express from 'express';

export const getAllTasks = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const tasks = await Task.find();

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
