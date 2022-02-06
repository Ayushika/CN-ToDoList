/** @format */

import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import Task from "./Task";
import axios from "axios";

const Home = () => {
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [ok, setOk] = useState("");
  var checked = [];

  var random = Math.floor(Math.random() * 100);

  const addTochecked = (ele) => {
    if (checked.includes(ele)) {
      var index = checked.indexOf(ele);
      var temp = checked[index];
      checked[index] = checked[checked.length - 1];
      checked[checked.length - 1] = temp;
      checked.pop();
    } else {
      checked.push(ele);
    }
  };

  const categories = ["Personal", "Work", "School", "Cleaning", "Others"];

  const addTask = async () => {
    const res = await axios.post("http://localhost:5000/api/addtask", {
      desc,
      category,
      date,
    });

    if (res) {
      setOk(random);
      setCategory("Task");
      setDate("");
      setDesc("");
    }
  };

  const deleteTasks = async () => {
    const res = await axios.delete("http://localhost:5000/api/deletetasks", {
      headers: {
        "Content-Type": "application/json",
      },
      data: { checked: checked },
    });

    if (res) {
      checked = [];
      setOk(random);
    }
  };

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/api/getalltasks");
    setTasks(res.data);
  }, [ok]);

  return (
    <Container className='mt-3'>
      <div className='row'>
        <div className='col'>
          <div className='form-group'>
            <label className='form-label mt-4'>Description</label>
            <input
              type='text'
              value={desc}
              className='form-control'
              placeholder='Add task...'
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <div className='col'>
          <div className='form-group'>
            <label className='form-label mt-4'>Select Category</label>
            <select
              className='form-select'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value=''>Select</option>
              {categories.map((c, idx) => {
                return (
                  <option key={idx + 1} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className='col'>
          <div className='form-group'>
            <label className='form-label mt-4'>Date</label>
            <input
              type='date'
              value={date}
              className='form-control'
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='row mt-3 mb-5'>
        <div className='col-md-4'>
          <button
            type='button'
            className='btn btn-outline-warning'
            onClick={() => addTask()}>
            <i className='far fa-calendar-plus'></i> &nbsp;&nbsp;Add Task
          </button>
          <button
            type='button'
            className='btn btn-outline-danger'
            onClick={() => deleteTasks()}
            style={{ marginLeft: "20px" }}>
            <i className='far fa-calendar-times'></i>&nbsp;&nbsp;&nbsp;Delete
            Tasks
          </button>
        </div>
      </div>
      <Table className='table' style={{ marginTop: "70px" }}>
        <tbody>
          {tasks &&
            tasks.length > 0 &&
            tasks.map((t, i) => {
              return (
                <Task
                  key={i + 1}
                  desc={t.desc}
                  date={t.date}
                  category={t.category}
                  id={t._id}
                  checked={checked}
                  addTochecked={addTochecked}
                />
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
