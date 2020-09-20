"use strict";
//mongodb
Object.defineProperty(exports, "__esModule", { value: true });
exports.startconnection = void 0;
const mongoose_1 = require("mongoose");
async function startconnection() {
    const db = await mongoose_1.connect('mongodb://127.0.0.1:27017/photo-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}
exports.startconnection = startconnection;
;
