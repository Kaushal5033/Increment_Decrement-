import { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const decreaseHandler = () => {
    setCounter(counter - 1);
  }

  const increaseHandler = () => {
    setCounter(counter + 1);
  }

  const resetHandler = () => {
    setCounter(0);
  }

  return (
    <div className="div1">
      <div className="div2">Increment & Decrement</div>
      <div className="div3">

        <button onClick={decreaseHandler} className="decrease">
          -
        </button>

        <div className="counter">
          {counter}
        </div>

        <button onClick={increaseHandler} className="increase">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="click">reset</button>
    </div>
  );
}

export default App;
