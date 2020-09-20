import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
//import { path } from "path";
import path = require("path");
const app = express();

//setting
app.set('port', process.env.PORT || 4000); //puerto que asigne el servidor o el 4000

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api',indexRoutes);

// esta carpeta será usado para archivos publicos
app.use('/uploads',express.static(path.resolve('uploads')));

export default app;