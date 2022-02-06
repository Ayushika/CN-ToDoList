/** @format */

import ItemSchema from "../models/ItemModel";

//@desc   Add task
//@routes POST /api/addtask
//@access PUBLIC
export const addTask = async (req, res) => {
  const { desc, category, date } = req.body;

  const task = await new ItemSchema({ desc, category, date }).save();
  res.status(200).send({ success: true });
};

//@desc   Get All tasks
//@routes GET /api/getAlltasks
//@access PUBLIC
export const getAllTasks = async (req, res) => {
  const tasks = await ItemSchema.find({}).exec();
  res.status(200).send(tasks);
};
