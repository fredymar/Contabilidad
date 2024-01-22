import { Router } from "express";
import controllers from "../controllers";

const router = Router()

router.get("/getAll", controllers.Categoria.getCategoria)
router.post("/createCategoria", controllers.Categoria.createCategoria)
router.put("/updateCategoria", controllers.Categoria.updateCategoria)
router.delete("/deleteCategoria/:_id", controllers.Categoria.deleteCategoria)


export default router