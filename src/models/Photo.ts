import { Schema, model, Document} from 'mongoose';
// esquema creado para mongoose
const schema = new Schema({
    title:String,
    description:String,
    imagePath:String
});
//interfaz creada pra typescript para que reconozca los elementos del esquema

interface IPhoto extends Document{
    title:string;
    description:string;
    imagePath:string;
}
//exporta el esquema cumpliendo con la interfaz IPhoto
export default model<IPhoto>('photo',schema);