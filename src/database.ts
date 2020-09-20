//mongodb

import {connect} from "mongoose";

export async function startconnection(){
 const db = await connect('mongodb://127.0.0.1:27017/photo-gallery-db',{
     useNewUrlParser:true,
     useUnifiedTopology: true,
     useCreateIndex:true,
     useFindAndModify:false
 });
 console.log('Database is connected');
};