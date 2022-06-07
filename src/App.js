import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const input_x = useSelector((state) => state.input_x);
  console.log(input_x, "from app js file");

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <p>by default input is 1</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <div>
        <input type="number" placeholder="enter payload / x"
          onChange={(e) => { dispatch({ type: "SET_X", payload: Number(e.target.value) }) }}
        />
        <div className="buttons">
          <button onClick={() => dispatch({ type: "ADD", payload: input_x })} >ADD</button>
          <button onClick={() => dispatch({ type: "MULTIPLY", payload: input_x })} >MULTIPLY</button>
          <button onClick={() => dispatch({ type: "SUBTRACT", payload: input_x })} >SUBTRACT</button>
          <button onClick={() => dispatch({ type: "DIVIDE", payload: input_x })} >DIVIDE</button>
          <button onClick={() => { dispatch({ type: "RESET" }) }}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
