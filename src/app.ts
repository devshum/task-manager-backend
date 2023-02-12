import express from 'express';
import morgan from 'morgan';
import { taskRouter } from './routers/taskRouter';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
