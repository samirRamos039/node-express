import { Router } from "express";
import { getEmployess,sendEmployess,putEmployess,patchEmployess,deletEmployess } from "../controlller/employess"; 

const router = Router()

router.get('/emplyess', getEmployess)

router.post('/emplyess', sendEmployess )

router.put('/emplyess', putEmployess)

router.delete('/emplyess', deletEmployess)

router.patch('/emplyess', patchEmployess)


export default router