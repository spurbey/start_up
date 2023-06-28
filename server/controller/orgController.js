import Orgs from "../model/orgSchema.js";
import * as fs from "fs";
import path from "path";

// Register an organization: http://localhost:8000/org
export const regOrg = async(req, res) => {
    // console.log(req.file)
    try {
        const orgCode = "org_"+ Date.now();

        const pick = fs.readFileSync(path.join("../server/uploads/orgLogos/" + req.file.filename))

        const newReq = {...req.body, orgCode: orgCode, orgLogoImage: pick}

        const data = await Orgs.create(newReq)

        if(data){
            console.log(data);
            res.status(200).json({
                msg: "Organization registered successfully."
            });
        }else(
            res.status(401).json({
                msg: "Organizatioon registration failed."
            })
        )
    }catch(error){
        console.log(error);
    }
}

//Get organizations list and details: http://localhost:8000/orgs?rating=4&page=1&limit=2
export const getOrgs = async(req, res) => {
    try {
         //filter
         const queryObj = { ...req.query }
         const excludeFields = ["page", "sort", "skip", "limit", "fields"]
         excludeFields.forEach(el => delete queryObj[el])
 
         //sort
         const sortBy = req.query.sort
         // console.log(queryObj, req.query.sort)
 
         //pagination
         const page = req.query.page
         const limit = req.query.limit
         const skip = (page - 1) * limit
         console.log(page, limit, skip)
 
         const orgs = await Orgs.find(queryObj).sort(sortBy).skip(skip).limit(limit)

        if (orgs){
            res.status(200).json({
                orgs
            })
        }else{
            res.status(401).json({
                msg: "Failed to fetch data."
            })
        }

    }catch(error){
        console.log(error);
    }
}

// http://localhost:<PORT>/orgs/:<orgCode>
// req.body(form-data)
export const editOrg = async(req, res) => {
    try {
        const pick = fs.readFileSync(path.join("../server/uploads/orgLogos/" + req.file.filename))

        const newReq = {...req.body, orgLogoImage: pick}

        const updated = await Orgs.findOneAndUpdate(req.OrgCode, newReq)

        if (updated){
            res.status(200).json({
                mag: "Organization details updated successfullly."
            })
        }else{
            res.status(401).json({
                msg: "Organization detials failed to update."
            })
        }
    }catch(error){
        console.log(error);
    }
}

export const removeOrg = async(req, res) => {
    try {
        console.log(req)
        const deleted = Orgs.findOneAndDelete( req.orgCode )
        if (deleted) {
            res.status(200).json({
                msg: "Event deleted succcecssfully."
            })
        } else {
            res.status(200).json({
                msg: "Event could not be deleted."
            })
        }
    } catch (error) {
        console.log(error)
    }
}
