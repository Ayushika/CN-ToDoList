/** @format */

import express from "express";
import {
 addTask,
 getAllTasks
} from "../controllers/itemController";
const router = express.Router();

router.route("/addtask").post(addTask);
router.route("/getallusers").get(getAllTasks);

export default router;
