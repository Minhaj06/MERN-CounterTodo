import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setCustom } from "../../redux/state/counter/counterSlice";

const Counter = () => {
  const customNumber = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h3 className="mb-0">Counter App</h3>
      </div>

      <div className="card-body">
        <h1>{count}</h1>

        <div className="my-4">
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

        <div className="w-50">
          <input
            ref={customNumber}
            type="number"
            name=""
            id=""
            className="form-control mb-3"
          />
          <button
            onClick={() => {
              dispatch(setCustom(customNumber.current.value));
            }}
            className="btn btn-info text-white w-100"
          >
            Set Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
