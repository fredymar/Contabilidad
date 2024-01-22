import mongoose, { Schema } from "mongoose"

//schema de la collection
const User = new Schema({
    name: {type: String, required: true},
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

export default mongoose.model("User", User)