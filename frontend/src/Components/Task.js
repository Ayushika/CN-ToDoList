/** @format */

import React from "react";

const Task = ({ desc, date, category, id, addTochecked }) => {
  date = date.substring(0, 10);
  return (
    <>
      <tr>
        <td>
          <fieldset className='form-group'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value={id}
                onChange={(e) => addTochecked(e.target.value)}
              />
            </div>
          </fieldset>
        </td>
        <td>
          <p>{desc}</p>
        </td>
        <td></td>
        <td>
          {category && <span className='badge bg-danger'>{category}</span>}
        </td>
        <td>
          <p className='text-muted'>{date}</p>
        </td>
      </tr>
    </>
  );
};

export default Task;
