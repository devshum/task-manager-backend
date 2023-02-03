import express from 'express';
import morgan from 'morgan';
import __dirname from 'path';

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
