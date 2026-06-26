import express from "express"
import { createEditShop, getMyShop } from "../controllers/shop.controllers.js";
import isAuth from "../middlewares/isAuth.js"
import { upload } from "../middlewares/multer.js";
const shopRouter = express.Router();
shopRouter.post(
  "/create-edit",
  isAuth,
   upload.single("image"),
  createEditShop
);

shopRouter.get(
  "/getmy",
  isAuth,
  upload.single("image"),
  createEditShop
);

export default shopRouter;
/*
import express from "express";
import { createEditShop, getMyShop } from "../controllers/shop.controllers.js";
import { upload } from "../middlewares/multer.js"; 
import verifyToken from "../middlewares/auth.js"; 
const router = express.Router();
router.post("/create-edit", verifyToken, upload.single("image"), createEditShop);
router.get("/my-shop", verifyToken, getMyShop);

export default router;*/