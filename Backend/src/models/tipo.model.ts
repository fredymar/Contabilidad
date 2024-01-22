import mongoose, { Schema } from "mongoose"

//schema de la collection
const Tipo = new Schema({
    nombreTipo: {type:String, require:true}
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("Tipo", Tipo)