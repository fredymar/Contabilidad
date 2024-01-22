import { Router } from "express"
import user from "./user.routes"
import movement from "./movement.routes"
import tipo from "./tipo.routes"
import categoria from "./categoria.routes"

const router = Router()

router.use("/user", user)
router.use("/movement", movement)
router.use("/tipo", tipo)
router.use("/categoria", categoria)


export default router