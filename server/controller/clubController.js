
import Clubs from "../model/clubSchema.js";
import * as fs from "fs"
import path from "path"
// import { getSearchInputTextType } from "../utils/getSearchTextType.js";
// import { query } from "express";


// create a new club
export const createClub = async (req, res, next) => {

  try {
    console.log(req.body, req.file);

    const clubCode = "club" + Date.now()

    // Profile picture
    let fileName = req.file.filename
    const pick = fs.readFileSync(path.join("../server/uploads/clubPfp/" + fileName))

    const newReq = { ...req.body, clubcode: clubCode, clubPfpImage: pick}

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

// // get a club's detials by clubname or clubcode 
// export const getClubDataByClubCodeOrName = async (req, res) => {
//   const searchInputTextType = getSearchInputTextType(req.body.searchInputText)
//   // console.log(searchInputTextType)

//   try {
//     const clubData = await Clubs.findOne({ [searchInputTextType]: req.body.searchInputText })
//     console.log(clubData)
//     if (clubData) {
//       res.json(clubData)
//     } else {
//       res.json({
//         msg: "Error fetching data",
//       });
//     }
//   } catch (error) { next(error) }
// }

// get a club's detials by clubname or clubcode 
export const getClubs = async (req, res, next) => {
  try {
  //filer
    const queryObj = {...req.query}
    const excludeFields = ["page", "sort", "limit", "fields", "skip"]
    excludeFields.forEach(el => delete queryObj[el])

    //sort
    const sortBy = req.query.sortBy
    console.log(queryObj, req.query.sort)

    //pagination
    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit

    const clubs = await Clubs.find(queryObj).sort(sortBy).skip(skip).limit(limit)
  
    console.log(clubs)
    if (clubs) {
      res.status(200).json(clubs)
    } else {
      res.json({
        msg: "Failed to fetch data",
      });
    }
  } catch (error) {
    console.log(error) }
}

/* 
Edit profile
PUT request: http://localhost:8000/clubs
req.body: {

    "_id": "6492e795529253c84e8e2281",
    "<key>": "<value>"
    "<key>": "<value>"
    }
*/
export const editClubProfile = async (req, res, next) => {
  try {
    console.log(req.body)
    const updated = await Clubs.findByIdAndUpdate(req.body._id, req.body)

    if (updated) {
      res.status(500).json({ 
        msg: "Profile updated!" })
    } else {
      res.json({ msg: "Error" })
    }
  } catch (error) {
    console.log(error)
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
      let updateData = { ...req.body, featuredImages : featuredImagesList }
      console.log(updateData)
      const data = await Clubs.findByIdAndUpdate(req.body._id, updateData)
      if(data){
        res.status(200).json({
          msg: "Featured images uploaded successfully."
        })
      }else{
        res.status(401).status({
          msg: "Failed to upload images."
        })
      }
    }
  } catch (error) {
    next(error)
  }
}

export const deleteClub = async(req, res) => {}
