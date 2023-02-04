import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { app } from './app';

dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000;
const database = process.env.DATABASE!;

// DATABASE CONNECTION
mongoose.set('strictQuery', false);
mongoose.connect(database, () =>
  console.log('The database connection is successful!'),
);

// APP LISTEN
app.listen(port, () => {
  console.log(`The app is runing on port ${port}...`);
});
