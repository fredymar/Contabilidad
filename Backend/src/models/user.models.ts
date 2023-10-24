import mongoose, { Schema } from "mongoose"

//schema de la collection
const user = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    lastName: {type: String, required: true},
    email : {type: String, required: true, unique:true},
    username: String,
    password: {type: String, required: true},
    phoneNumber : {type: String, required: true}
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("User", user)