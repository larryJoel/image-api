"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// esquema creado para mongoose
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    imagePath: String
});
//exporta el esquema cumpliendo con la interfaz IPhoto
exports.default = mongoose_1.model('photo', schema);
