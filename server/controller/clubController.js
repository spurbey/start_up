
import Clubs from "../model/clubSchema.js";



export const createClub = async (req, res, next) => {

  try {
    console.log(req.file);

    const clubCode = "club" + Date.now()

    const fileName = "clubPfp_" + req.body.clubname + ".jpeg"

    const newReq = {...req.body, clubcode: clubCode, clubPfpImageName: fileName}
    
    const data = await Clubs.create(newReq)

    if(data){
      res.status(200).json({
        msg: "Club registered successfully!"
      }) 
      console.log("Club registered successfully")
    }else{
      res.status(401).json({
        msg: "Club registration failed!"
      })
    }
  
  } catch (error) {
    next(error);
  }
};




export const getClubDataByClubCode = async(req, res) => {
  try{
    const clubData = await Clubs.find({clubcode: req.params.clubcode})
    console.log(clubData)
    if(clubData){
      res.json(clubData)
    }else {
      res.json({
        msg: "Error fetching data",
      });
    }
  }catch(error){next(error)}
}

export const getAllClubsList = async(req, res) => {
  try{
    const allClubsList = await Clubs.find()
    console.log(allClubsList)
    if(allClubsList){
      res.json({allClubsList: allClubsList})
    }else {
      res.json({
        msg: "Error fetching data",
      });
    }
  }catch(error){next(error)}
}

