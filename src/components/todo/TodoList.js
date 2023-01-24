import React from "react";
import { useSelector } from "react-redux";
import TodoRemoveAlert from "./TodoRemoveAlert";
import TodoEditAlert from "./TodoEditAlert";

function TodoList() {
  const todoItems = useSelector((state) => state.todo.value);

  return (
    <div className="row my-4">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Task Name</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {todoItems.map((item, i) => {
              return (
                <tr key={i.toString()}>
                  <td>{i}</td>
                  <td>{item}</td>
                  <td>
                    <button onClick={() => TodoEditAlert(i)} className="btn btn-warning px-4">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => TodoRemoveAlert(i)} className="btn btn-danger px-4">
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
