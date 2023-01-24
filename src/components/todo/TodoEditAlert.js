import Swal from "sweetalert2";
import { editTodo } from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";

function TodoEditAlert(i, item) {
  Swal.fire({
    title: "Update Task",
    input: "text",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editTodo({ index: i, task: value }));
      }
    },
  });
}

export default TodoEditAlert;
