import mongoose from 'mongoose';
import { Task } from '../interfaces/interfaces';

const taskSchema = new mongoose.Schema<Task>({
  name: {
    type: String,
    required: [true, 'A task must have a name!'],
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  status: {
    type: String,
    required: [true, 'A task must have a status!'],
    enum: ['closed', 'pending', 'in progress'],
  },

  importance: {
    type: String,
    required: [true, 'A task must have an importance!'],
    enum: ['minor', 'normal', 'critical'],
  },
});

export default mongoose.model('Task', taskSchema);
