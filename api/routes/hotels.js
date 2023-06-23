import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, listHotels, updateHotel,countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE HOTELS
router.post("/",createHotel);

//UPDATE HOTELS
router.put("/:id",verifyAdmin,updateHotel);

//DELETE HOTELS
router.delete("/:id",verifyAdmin,deleteHotel);

//GET ALL HOTELS
router.get("/",verifyAdmin,listHotels);

router.get("/countByCity",verifyAdmin,countByCity);

router.get("/countByType",verifyAdmin,countByType);

export default router;