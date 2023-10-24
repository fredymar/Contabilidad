import mongoose from "mongoose";

//CREAR INSTANCIA DE EXPRESS

export const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URL || "")
        console.log("DB is already connect!");
    } catch (error) {
        console.log({error});
        
    }
}