
import Clubs from "../model/clubSchema.js";
import * as fs from "fs"
import path from "path"
import { getSearchInputTextType } from "../utils/getSearchTextType.js";


// create a new club
export const createClub = async (req, res, next) => {

  try {
    // console.log(req.file);

    const clubCode = "club" + Date.now()

    let fileName = "clubPfp_" + req.body.clubname + ".jpeg"

    fileName = fs.readFileSync("../server/uploads/clubFeaturedImages/" + fileName)

    const newReq = { ...req.body, clubcode: clubCode, clubPfpImageName: fileName }

    const data = await Clubs.create(newReq)

    if (data) {
      res.status(200).json({
        msg: "Club registered successfully!"
      })
      console.log("Club registered successfully")
    } else {
      res.status(401).json({
        msg: "Club registration failed!"
      })
    }

  } catch (error) {
    next(error);
  }
};

// get a club's detials by clubname or clubcode 
export const getClubDataByClubCodeOrName = async (req, res) => {
  const searchInputTextType = getSearchInputTextType(req.body.searchInputText)
  // console.log(searchInputTextType)

  try {
    const clubData = await Clubs.findOne({ [searchInputTextType]: req.body.searchInputText })
    // console.log(clubData)
    if (clubData) {
      res.json(clubData)
    } else {
      res.json({
        msg: "Error fetching data",
      });
    }
  } catch (error) { next(error) }
}

// get an owner's clubs list 
export const getClubsListByOwnerId = async (req, res) => {
  // console.log(req.params.ownerid)
  try {
    const ownersClubsList = await Clubs.find({ ownerid: req.params.ownerid })
    // console.log(ownersClubsList)
    if (ownersClubsList) {
      res.json(ownersClubsList)
    } else {
      res.json({
        msg: "Error fetching data",
      });
    }
  } catch (error) { next(error) }
}


// get entire clubs list
export const getAllClubsList = async (req, res, next) => {
  try {
    const allClubsList = await Clubs.find()
    console.log(allClubsList)
    if (allClubsList) {
      res.json({ allClubsList: allClubsList })
    } else {
      res.json({
        msg: "Error fetching data",
      });
    }
  } catch (error) { next(error) }
}

// Edit profile
export const editClubProfile = async (req, res, next) => {
  try {
    const updateData = await Clubs.findByIdAndUpdate(req.body, _id, req.body)
    if (updateData) {
      res.status(500).json({ msg: "Profile updated!" })
    } else {
      res.json({ msg: "Error" })
    }
  } catch (error) {
    next(error)
  }
}
//update featured images
export const uploadFeaturedImages = async (req, res, next) => {
  try {
    if (req.files) {
      // console.log(req.files, req.body)
      let featuredImagesList = req.files.map(m => {
        return fs.readFileSync(path.join("../server/uploads/clubFeaturedImages/" + m.filename))
        // return m.filename
      })
      // let featuredImagesObj = { ...featuredImagesList }
      let updateData = { ... req.body, featuredImages : featuredImagesList }
      console.log(updateData)
      const data = await Clubs.findByIdAndUpdate("648c9ef1d2a54d9e157a022f", updateData)
    }
  } catch (error) {
    next(error)
  }
}

