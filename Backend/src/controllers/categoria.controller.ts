import Express  from "express";
import categoriaModel from "../models/categoria.model";


export const getCategoria = async(req:Express.Request, res:Express.Response) => {
    try {
        
        const result = await categoriaModel.find()
        return res.status(200).json({result})

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const createCategoria = async(req:Express.Request, res:Express.Response) => {
    try {
        
        let newCategoria = req.body
        const categoriaCreated = await categoriaModel.create(newCategoria)
        if (categoriaCreated) return res.status(200).json({msg: "Categoria creada exitosamente"})         
        throw {msg: "Ha ocurrido algun error"}

    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const updateCategoria= async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await categoriaModel.findByIdAndUpdate(_id, dataToUpdate)
        console.log(dataToUpdate);
        
        return res.status(200).json({msg: "Categoria Actualizada", dataToUpdate})
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteCategoria = async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.params
        const deleteData = await categoriaModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Categoria Eliminada"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

