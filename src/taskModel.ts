import mongoose from 'mongoose';
import { Task } from './interfaces';

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

taskSchema.method('toJSON', function toJSON() {
  const { __v, _id, ...object } = this.toObject();
  return {
    id: _id,
    ...object,
  };
});

export default mongoose.model('Task', taskSchema);
