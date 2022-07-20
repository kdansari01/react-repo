import { useState } from "react";

export const Todo = () => {
  const [editData,setEditData] = useState("")
  const [newTask, setNewTask] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const dataId = { id: Math.floor(Math.random() * 2000), value: task };

    setNewTask((preData) => [...preData, task]);
    setTask("");
  };

  const handleDelete = (text) => {
    const newdata = newTask.filter((data) => data !== text);
    setNewTask(newdata);
  };

  const handleEdit = (newTxt)=>{
    const newEditData = newTask.filter((edit)=>edit ===newTxt)
    setEditData(newEditData)
    console.log(editData)
  }
 
  console.clear();
  console.log(newTask);

  return (
    <div className="container">
      <div className="todo-box">
        <div>
          <h2>Todo App</h2>
        </div>
        <div className="todo-input">
          <form onSubmit={handleSubmit}>
            <input
              className="display-text"
              type="text"
              placeholder="add Task Here"
              name="task"
              value={task}
              onChange={handleChange}
              autoComplete="off"
            />
            <button className="addButton" type="submit">
              Add
            </button>
          </form>
        </div>
        <table className="table">
          <th>Sr.</th>
          <th>Task</th>
          <th></th>
          {newTask.map((taskData, index) => (
            <tr className="textColor">
              <td>{index + 1}</td>
              <td>{taskData}</td>
              <td>
                <button className="edit" conClick={()=>handleEdit(taskData)}>✂</button>
                <button onClick={() => handleDelete(taskData)} className="remove">
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
