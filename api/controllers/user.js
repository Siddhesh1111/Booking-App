import User from "../models/User.js";

export const updateUser = async (req,res,next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
        res.status(200).json(updateUser);
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req,res,next) => {
    try {
        const updateUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been successfully deleted');
    }catch(err){
        next(err);
    }
}

export const listUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}