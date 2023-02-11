import TaskModel from '../models/taskModel.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

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

export const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);

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
