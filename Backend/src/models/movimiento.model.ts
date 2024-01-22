import mongoose, { Schema } from "mongoose"

//schema de la collection
const Movimiento = new Schema({
    mes: {type:String, require:true},
    tipo: {type: String, required: true},
    fecha: {type: Date, required: true},
    valor : {type: String, required: true},
    categoria: {type: String, required: true},
    subcategoria: {type: String, required: true},
    metodo_de_pago : {type: String, required: true}
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("Movimiento", Movimiento)