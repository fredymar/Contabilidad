import  Express  from "express";
import dotenv from "dotenv"
import apiRoutes from "./routes/index"
import { connectDB } from "./database";
//import { connectDB } from "./database"

//CREAR INSTANCIA DE EXPRESS
const app = Express()

//TRAER PUERTO DE VARIABLES DE ENTORNO
dotenv.config() //traer la configuracion de env

//CONEXION BASE DE DATOS
connectDB()

//PUERTO EN EL QUE SE EJECUTA EL API
const port = process.env.PORT || 3200

//ESTEBLECER USOS DE EXPRESS
app.use(Express.json()) //DECIRLE A EXPRESS QUE ENTIENDA JSON

//ESTABLECER LAS RUTAS QUE VA A USAR EL API
app.use("/api", apiRoutes) //TRAER UNA DIRECCION GET

//EJECUCION DEL API
app.listen(port, () => console.log(`api is running in port ${port}`))