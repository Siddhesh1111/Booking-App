import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { room: savedRoom._id },
        });
        console.log("Operation Success");
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  };

export const updateRoom = async (req,res,next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
        res.status(200).json(updateRoom);
    }catch(err){
        next(err);
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };

export const listRooms = async (req,res,next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    }
}