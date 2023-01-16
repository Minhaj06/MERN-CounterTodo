import React from "react";
import Counter from "../components/counter/Counter";

const CounterPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xxl-7">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
