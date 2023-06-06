import multer from "multer";


const clubPfpStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/clubPfp")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "clubPfp_" + req.body.clubname + ".jpeg" )
    }
})


const fileFilter = (req, file, cb) => {
    //accept only .jpeg and .png formats
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
export const clubPfpUpload = multer({
    storage: clubPfpStorage,
    limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    fileFilter: fileFilter
}).single("clubPfpImageName")