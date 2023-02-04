import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A task must have a name!'],
  },

  date: {
    type: Date,
    required: [true, 'A task must have a date!'],
    default: Date.now(),
  },

  status: {
    type: String,
    required: [true, 'A task must have a status!'],
    enum: ['closed', 'pending', 'in progress']
  },

  importance: {
    type: String,
    required: [true, 'A task must have an importance!'],
    enum: ['minor', 'normal', 'critical']
  },
});

export default mongoose.model('Task', taskSchema);
