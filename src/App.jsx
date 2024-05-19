import { useState } from "react";

import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [oldnum, setoldNum] = useState(0);
  const [operador, setOperador] = useState();
  function btnNum(e) {
    let btn = e.target.value;
    if (num === 0) {
      setNum(btn);
    } else {
      setNum(num + btn);
    }
  }

  function clear() {
    setNum(0);
  }
  function porcentage() {
    setNum(num / 100);
  }

  function operadorHandler(e) {
    let operadorBtn = e.target.value;
    setOperador(operadorBtn);
    setoldNum(num);
    setNum(0);
  }
  function calculate() {
    switch (operador) {
      case "+":
        setNum(Number(oldnum) + Number(num));
        break;
      case "-":
        setNum(oldnum - num);
        break;
      case "*":
        setNum(oldnum * num);
        break;
      case "/":
        setNum(oldnum / num);
        break;
    }
  }
  return (
    <div className="calculadora">
      <div className="calculadora-header">
        <p className="result">{num}</p>
      </div>
      <div className="calculadora-btn">
        <button className="btn" onClick={btnNum} value={1}>
          1
        </button>
        <button className="btn" onClick={btnNum} value={2}>
          2
        </button>
        <button className="btn" onClick={btnNum} value={3}>
          3
        </button>
        <button className="btn operador" onClick={operadorHandler} value={"+"}>
          +
        </button>
        <button className="btn" onClick={btnNum} value={4}>
          4
        </button>
        <button className="btn" onClick={btnNum} value={5}>
          5
        </button>
        <button className="btn" onClick={btnNum} value={6}>
          6
        </button>
        <button className="btn operador" onClick={operadorHandler} value={"-"}>
          -
        </button>
        <button className="btn" onClick={btnNum} value={7}>
          7
        </button>
        <button className="btn" onClick={btnNum} value={8}>
          8
        </button>
        <button className="btn" onClick={btnNum} value={9}>
          9
        </button>
        <button className="btn operador" onClick={operadorHandler} value={"*"}>
          X
        </button>
        <button className="btn" onClick={btnNum} value={"."}>
          ,
        </button>
        <button className="btn" onClick={btnNum} value={0}>
          0
        </button>
        <button className="btn" onClick={clear}>
          C
        </button>
        <button className="btn operador" onClick={operadorHandler} value={"/"}>
          /
        </button>
        <button className="btn equal" onClick={calculate}>
          =
        </button>
        <button className="btn operador porcent" onClick={porcentage}>
          %
        </button>
      </div>
    </div>
  );
}

export default App;
