import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { taskRouter } from './taskRouter';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
