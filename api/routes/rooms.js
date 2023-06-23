import express from "express";
import { createRoom,updateRoom,deleteRoom, listRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE Rooms
router.post("/:hotelid",createRoom);

//UPDATE Rooms
router.put("/:id",verifyAdmin,updateRoom);

//DELETE Rooms
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//GET ALL Rooms
router.get("/",verifyAdmin,listRooms);

export default router;