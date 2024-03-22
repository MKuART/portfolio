import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import MainRouter from "./router/MainRouter.js"
import { invalid } from './router/invalid.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 500;
const MONGO_DB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017';


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:5173"}));

app.use("/", MainRouter)
app.use("*", invalid)
app.use(errorHandler)

mongoose.connect(MONGO_DB_URI)
  .then(() => {
    console.log('MongoDB verbunden');
    app.listen(PORT, () => {
      console.log(`Server läuft auf http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Fehler bei der Verbindung mit MongoDB:', error);
  });

mongoose.connection.on('error', (error) => {
  console.error('Fehler bei der Verbindung zur Datenbank:', error);
});