import express from "express";
import { updateUser, deleteUser, listUsers } from "../controllers/user.js";
import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=> {
//     res.send("Hello user, you have been authenticated");
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
//     res.send("Hello user, you have been logged in and can delete");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
//     res.send("Hello user, you have been logged in and can delete all accounts");
// })
//UPDATE Users
router.put("/:id",verifyUser,updateUser);

//DELETE Users
router.delete("/:id",verifyUser,deleteUser);

//GET ALL Users
router.get("/",verifyUser,listUsers);

export default router;