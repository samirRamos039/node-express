import { Router } from "express";
import { gets,sendEmployess,putEmployess,patchEmployess,deletEmployess } from "../controlller/proyectscontroller.js"; 

const router = Router()

router.get('/proyects', gets)

router.post('/proyects', sendEmployess )

router.put('/proyects', putEmployess)

router.delete('/proyects/id', deletEmployess)

router.patch('/proyects', patchEmployess)


export default router