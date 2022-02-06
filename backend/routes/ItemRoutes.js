/** @format */

import express from "express";
import {
  addTask,
  getAllTasks,
  deleteTasks,
} from "../controllers/itemController";
const router = express.Router();

router.route("/addtask").post(addTask);
router.route("/getalltasks").get(getAllTasks);
router.route("/deletetasks").delete(deleteTasks);

export default router;
