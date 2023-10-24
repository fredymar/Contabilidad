import { Router } from "express";
import controllers from "../controllers";

const router = Router()

router.get("/getAll", controllers.User.getUsers)
router.post("/createUser", controllers.User.createUser)
router.put("/updateUser", controllers.User.updateUser)
router.delete("/deleteUser/:_id", controllers.User.deleteUser)




export default router