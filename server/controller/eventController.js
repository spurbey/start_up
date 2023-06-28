import * as fs from "fs"
import path from "path"
import Event from "../model/eventSchema.js"

/* 
POST request: 
"http://localhost:${PORT}/postEvent"
 body, form-data
 Date format: "11/20/2023 10:00"
*/
export const postEvent = async (req, res, next) => {
    try {
        console.log(req.body, req.file)
        const eventBriefId = "event_" + req.body.clubCode + "_" + Date.now()

        let fileName = req.file.filename
        
        const pick = fs.readFileSync(path.join("../server/uploads/eventBanners/" + fileName))
        
        const newReq = { ...req.body, bannerImage: pick, eventBriefId: eventBriefId }

        const data = await Event.create(newReq);

        if (data) {
            res.status(200).json({
                msg: "Event posted successfully!"
            })
        } else {
            res.status(401).json({
                msg: "Post event failed!."
            })
        }
    } catch (error) {
        console.log(error)
    }
}

/*
GET all events: "http://localhost:${PORT}/events"
GET events by clubName: "http://localhost:${PORT}/events?clubname=<clubName>
GET events by clubName and sort by eventDate(asc): 
                "http://localhost:${PORT}/events?clubname=<clubName>&sort=eventDate
GET events by clubName and sort by eventDate(dec): 
                "http://localhost:${PORT}/events?clubname=<clubName>&sort=-eventDate
Pagination:
GET page 1, 5 restuts per page:
                "http://localhost:${PORT}/events?page=1&limit=5"

*/
export const getEventsList = async (req, res, next) => {
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

        const events = await Event.find(queryObj).sort(sortBy).skip(skip).limit(limit)

        if (events) {
            res.status(200).json({
                events
            })
        } else {
            res.status(401).json({
                msg: "Failed to fetch data."
            })
        }
    } catch (error) {
        console.log(error)
    }
}

/*
    PUT request: 
    find by event brief id and update
    "http://localhost:${PORT}/events/:<eventBriefId>"
*/
export const editEvent = async (req, res, next) => {
    try {

        let fileName = req.file.filename
        
        const pick = fs.readFileSync(path.join("../server/uploads/eventBanners/" + fileName))
        
        const updatedReq = { ...req.body, bannerImage: pick}

        const updated = await Event.findOneAndUpdate(req.eventBriefId, updatedReq)


        if (updated) {
            res.status(200).json({
                msg: "Event detials successfully updated."
            })
        } else {
            res.status(401).json({
                msg: "Update event detials failed."
            })
        }
    } catch (error) { console.log(error) }
}


export const removeEvent = async (req, res, next) => {
    try {
        console.log(req)
        const deleted = Event.findOneAndDelete( req.eventBriefId )

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