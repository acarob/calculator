import "./App.css";
import calc from "./images/calc.png";
import Boton from "./components/Boton";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please insert a value to be calculated.");
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={calc} className="logo" alt="calculator-logo" />
        <h1>Time to calculate</h1>
        <img src={calc} className="logo" alt="calculator-logo" />
      </div>
      <div className="calculator-container">
        <Screen input={input} />
        <div className="line">
          <Boton manageClick={addInput}>1</Boton>
          <Boton manageClick={addInput}>2</Boton>
          <Boton manageClick={addInput}>3</Boton>
          <Boton manageClick={addInput}>+</Boton>
        </div>
        <div className="line">
          <Boton manageClick={addInput}>4</Boton>
          <Boton manageClick={addInput}>5</Boton>
          <Boton manageClick={addInput}>6</Boton>
          <Boton manageClick={addInput}>-</Boton>
        </div>
        <div className="line">
          <Boton manageClick={addInput}>7</Boton>
          <Boton manageClick={addInput}>8</Boton>
          <Boton manageClick={addInput}>9</Boton>
          <Boton manageClick={addInput}>*</Boton>
        </div>
        <div className="line">
          <Boton manageClick={calculateResult}>=</Boton>
          <Boton manageClick={addInput}>0</Boton>
          <Boton manageClick={addInput}>.</Boton>
          <Boton manageClick={addInput}>/</Boton>
        </div>
        <div className="line">
          <ClearButton manageClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
