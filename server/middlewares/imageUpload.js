import multer from "multer";

//clubs
const clubPfpStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/clubPfp")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "clubPfp_" + req.body.clubname + ".jpeg")
    }
})

const clubFeatureImagesStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/clubFeaturedImages")
    },
    filename: function (req, file, cb) {
        cb(null, "clubFeatImg_" + Date.now() + ".jpeg")
    }
})

//events
const eventBannerImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/eventBanners")
    },
    filename: function (req, file, cb) {
        // console.log(req.body)
        cb(null, "eventBanner_" + req.body?.clubCode + "_" + Date.now() + ".jpeg")
    }
})

//orgs
const orgLogoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/orgLogos")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "orgLogo_" + req.body.orgName + ".jpeg")
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
}).single("clubPfpImage")

export const clubFeatureImagesUpload = multer({
    storage: clubFeatureImagesStorage, 
    limits: { fileSize: 1024 * 1024 * 4 },
    fileFilter: fileFilter
}).array("featuredImages", 5)

export const eventBannerUpload = multer({
    storage: eventBannerImageStorage,
    limits: { fileSize: 1024 * 1024 * 4 },
    fileFilter: fileFilter
}).single("bannerImage")

export const orgLogoUpload = multer({
    storage: orgLogoStorage,
    limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    fileFilter: fileFilter
}).single("orgLogoImage")

