"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
//import { path } from "path";
const path = require("path");
const app = express_1.default();
//setting
app.set('port', process.env.PORT || 4000); //puerto que asigne el servidor o el 4000
//middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//Routes
app.use('/api', index_1.default);
// esta carpeta será usado para archivos publicos
app.use('/uploads', express_1.default.static(path.resolve('uploads')));
exports.default = app;
