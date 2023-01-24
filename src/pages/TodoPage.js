import React from "react";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";

function TodoPage() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h3 className="mb-0">Todo App</h3>
            </div>
            <div className="card-body">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
