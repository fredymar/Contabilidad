import { Router } from "express";
import controllers from "../controllers";

const router = Router()

router.get("/getAll", controllers.Movement.getMovement)
router.post("/createMovement", controllers.Movement.createMovement)
router.put("/updateMovement", controllers.Movement.updateMovement)
router.delete("/deleteMovement/:_id", controllers.Movement.deleteMovement)


export default router