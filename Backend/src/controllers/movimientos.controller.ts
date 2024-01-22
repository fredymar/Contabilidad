import Express  from "express";
import movimentoModel from "../models/movimiento.model";

export const getMovement = async(req:Express.Request, res:Express.Response) => {
    try {
        
        const result = await movimentoModel.find()
        return res.status(200).json({result})

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const createMovement = async(req:Express.Request, res:Express.Response) => {
    try {
        
        let newMovement = req.body
        const movementCreated = await movimentoModel.create(newMovement)
        if (movementCreated) return res.status(200).json({msg: "Movimiento creado exitosamente"})         
        throw {msg: "Ha ocurrido algun error"}

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const updateMovement = async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await movimentoModel.findByIdAndUpdate(_id, dataToUpdate)
        console.log(dataToUpdate);
        
        return res.status(200).json({msg: "Movimiento Actualizado", dataToUpdate})
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteMovement = async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.params
        const deleteData = await movimentoModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Movimiento Eliminado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

