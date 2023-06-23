import Testimonies from "../model/testimonySchema.js"

// save testimony
export const createTestimony = async (req, res, next) => {
    try{
        const testimonyid = "testimony_" + req.body.clubcode + "_" + Date.now();

        const newReq = {...req.body, testimonyid: testimonyid}

        const data = await Testimonies.create(newReq);

        if(data){
            res.status(200).json({
                msg: "Testimony recorded successfully!"
            })
        }else{
            res.status(401).json({
                msg: "Testimony failed to recoed."
            })
        }
    }catch(error){next(error)}
}

export const getTestimoniesByClubCode = async(req, res, next) => {
    try{
        const data = await Testimonies.find({clubcode: req.params.clubcode})
        if (data){
            res.status(200).json({
                testimonies: data
            })
        }else{
            res.status(401).json({
                msg: "Failed to fetch data."
            })
        }
    }catch(error){
        next(error)
    }
}