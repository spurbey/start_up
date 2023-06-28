import express from "express";
const router = express.Router();
import {regOrg, getOrgs, editOrg, removeOrg} from "../controller/orgController.js"
import { orgLogoUpload } from "../middlewares/imageUpload.js";

router.post("/org",orgLogoUpload, regOrg);
router.get("/orgs", getOrgs);
router.put("/orgs/:orgCode", orgLogoUpload, editOrg);
router.delete("/orgs/:orgCode", removeOrg);

export default router;