import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/state/todo/todoSlice";

function CreateTodo() {
  const dispatch = useDispatch();
  const taskName = useRef();

  return (
    <div className="row my-4">
      <div className="col-md-10">
        <input
          ref={taskName}
          type="text"
          className="form-control"
          placeholder="Enter task name"
        />
      </div>
      <div className="col-md-2">
        <button
          onClick={() => dispatch(addTodo(taskName.current.value))}
          className="btn btn-info text-white w-100"
        >
          Add To Do
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
