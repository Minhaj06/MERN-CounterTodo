import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h3 className="mb-0">Counter App</h3>
      </div>

      <div className="card-body">
        <h1 className="mb-3">{count}</h1>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="btn btn-danger me-3"
        >
          Decrease (-)
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="btn btn-info text-white"
        >
          Increase (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;
