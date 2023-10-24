import Express  from "express";
import userModel from "../models/user.models";

export const getUsers = async(req:Express.Request, res:Express.Response) => {
    try {
        
        const result = await userModel.find()
        return res.status(200).json({result})

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const createUser = async(req:Express.Request, res:Express.Response) => {
    try {
        
        let newUser = req.body
        const userCreated = await userModel.create(newUser)
        if (userCreated) return res.status(200).json({msg: "Usuario creado exitosamente"})         
        throw {msg: "Ha ocurrido algun error"}

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const updateUser = async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await userModel.findByIdAndUpdate(_id, dataToUpdate)
        console.log(dataToUpdate);
        
        return res.status(200).json({msg: "Usuario Actualizado", dataToUpdate})
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteUser = async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.params
        const deleteData = await userModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Usuario Eliminado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

