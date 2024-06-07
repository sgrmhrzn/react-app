import { useState } from "react";
import { useCalculator } from "../hooks/useCalculator";
import { useEffect } from "react";

const centerStyle = {
  width: "fit-content",
  margin: "auto",
};

const buttonStyle = {
  fontSize: "1.5em",
  margin: "5px",
};

export function Calculator() {

  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(value);
  }, [])

  var onValueClick = (newValue) => {
    setValue(value + newValue);
  }

  var calculation = () => {
    if (value[0]?.includes('+')) {
      alert('Invalid input');
      return;
    }
    if (value.includes('+')) {
      setValue(logic('+'));
    }
    if (value.includes('*')) {
      setValue(logic('*'));
    }
    if (value.includes('-')) {
      setValue(logic('-'));
    }

  }

  function logic(type) {
    const [additionValues, ...rest] = value.split(type);
    // let result = +additionValues.shift();
    let result = additionValues;
    additionValues.forEach((value, i) => {
      console.log(value);
      switch (type) {
        case '+':
          result = result + (+value);
          break;
        case '*':
          result = result * value;
          break;
        case '-':
          result = result - value;
          break;
      }
    })
    return result;
  }

  var onValueChange = (value) => {
    console.log(value);
  }



  useCalculator();
  return (
    <div style={centerStyle}>
      <h1>Calculator</h1>
      <input value={value} onChange={onValueChange} />
      <div style={centerStyle}>
        <div>
          <button style={buttonStyle} onClick={() => onValueClick('7')}>7</button>
          <button style={buttonStyle} onClick={() => onValueClick('8')}>8</button>
          <button style={buttonStyle} onClick={() => onValueClick('9')}>9</button>
          <button style={buttonStyle} onClick={() => onValueClick('*')}>*</button>
        </div>
        <div>
          <button style={buttonStyle} onClick={() => onValueClick('4')}>4</button>
          <button style={buttonStyle} onClick={() => onValueClick('5')}>5</button>
          <button style={buttonStyle} onClick={() => onValueClick('6')}>6</button>
          <button style={buttonStyle} onClick={() => onValueClick('-')}>-</button>
        </div>
        <div>
          <button style={buttonStyle} onClick={() => onValueClick('1')}>1</button>
          <button style={buttonStyle} onClick={() => onValueClick('2')}>2</button>
          <button style={buttonStyle} onClick={() => onValueClick('3')}>3</button>
          <button style={buttonStyle} onClick={() => onValueClick('+')}>+</button>
        </div>
        <div>
          <button style={buttonStyle} onClick={() => onValueClick('0')}>0</button>
          <button style={buttonStyle} onClick={() => onValueClick('.')}>.</button>
          <button style={buttonStyle} onClick={() => calculation()}>=</button>
          <button style={buttonStyle} onClick={() => setValue('')}>Clear</button>
        </div>
      </div>
    </div>
  );
}
