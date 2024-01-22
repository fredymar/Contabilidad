import { Router } from "express";
import controllers from "../controllers";

const router = Router()

router.get("/getAll", controllers.Tipo.getTipo)
router.post("/createTipo", controllers.Tipo.createTipo)
router.put("/updateTipo", controllers.Tipo.updateTipo)
router.delete("/deleteTipo/:_id", controllers.Tipo.deleteTipo)


export default router