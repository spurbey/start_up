import express from "express";
const router = express.Router();
import { addBookmark, getBookmarks, removeBookmark } from "../controller/bookmarkController.js"

router.put("/bookmarks", addBookmark);
router.get("/bookmarks", getBookmarks);
router.put("/removeBookmark", removeBookmark);

export default router;
 

