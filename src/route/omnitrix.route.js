import { Router } from "express";
import multer from "multer";
import { getomnitrixs, omnitrixs } from "../controller/omnitrix.controller.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post("/omnitrix", upload.single("uploadfile"), omnitrixs);
router.get("/omnitrixg", getomnitrixs);

export default router;
