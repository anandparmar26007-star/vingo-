import express from "express"
import { createEditShop } from "../controllers/shop.controllers"
import isAuth from "../middlewares/isAuth"
import { addItem, editItem } from "../controllers/item.controllers"
import { upload } from "../middlewares/multer"


const itemRouter=express.Router()
  itemRouter.post("/create-item",
    isAuth,
    upload.single("image"),
    addItem)

   itemRouter.post("/create-item",
    isAuth,
    upload.single("image"),
    editItem)

  export default itemRouter