import Express  from "express";
import tipoModel from "../models/tipo.model";

export const getTipo = async(req:Express.Request, res:Express.Response) => {
    try {
        
        const result = await tipoModel.find()
        return res.status(200).json({result})

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const createTipo = async(req:Express.Request, res:Express.Response) => {
    try {
        
        let newTipo = req.body
        const tipoCreated = await tipoModel.create(newTipo)
        if (tipoCreated) return res.status(200).json({msg: "Tipo creado exitosamente"})         
        throw {msg: "Ha ocurrido algun error"}

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const updateTipo = async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await tipoModel.findByIdAndUpdate(_id, dataToUpdate)
        console.log(dataToUpdate);
        
        return res.status(200).json({msg: "Tipo Actualizado", dataToUpdate})
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteTipo = async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.params
        const deleteData = await tipoModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Tipo Eliminado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

