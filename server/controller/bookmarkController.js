import user from "../model/userSchema.js"

export const addBookmark = async(req, res) => {
    console.log(req.body.bookmarks)
    try{    
            const data = await user.findByIdAndUpdate(req.body._id, {$push : {"bookmarks": req.body.bookmarks}})
            if(data){
                res.status(200).json({
                    msg: "Bookmark added."
                })
            } else {
                res.status(401).json({
                    msg: "Bookmark failed."
                })
            }

    }catch(error){
        console.log(error)
    }
}

export const getBookmarks = async(req, res) => {
    try{    
            const data = await user.findById(req.body._id)
            if(data){
                res.status(200).json({
                    data
                })
            } else {
                res.status(401).json({
                    msg: "Failed to fetch data."
                })
            }

    }catch(error){
        console.log(error)
    }
}

export const removeBookmark = async(req, res) => {
    try{    
        const data = await user.findByIdAndUpdate(req.body._id, {$pull : {"bookmarks": req.body.bookmarks}})
        if(data){
                res.status(200).json({
                    msg: "Bookmark removed."
                })
            } else {
                res.status(401).json({
                    msg: "Bookmark failed."
                })
            }

    }catch(error){
        console.log(error)
    }
}

