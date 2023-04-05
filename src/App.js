import "./App.css";
import calc from "./images/calc.png";
import Boton from "./components/Boton";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={calc} className="logo" alt="calculator-logo" />
        <h1>Time to calculate</h1>
        <img src={calc} className="logo" alt="calculator-logo" />
      </div>
      <div className="calculator-container">
        <div className="line">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="line">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="line">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="line">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>÷</Boton>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default App;
