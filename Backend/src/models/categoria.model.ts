import mongoose, { Schema } from "mongoose"

//schema de la collection
const Categoria = new Schema({
    nombreCategoria: {type:String, require:true},
    subCategoria: {type: Array,require:true}
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("Categoria", Categoria)