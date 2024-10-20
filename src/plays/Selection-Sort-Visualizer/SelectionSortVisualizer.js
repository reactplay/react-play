import React, { useState } from 'react';
import './select.css';

function SelectionSortVisualizer() {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue === '') return;
    const newValue = Number(inputValue);
    setArr([...arr, newValue]);
    setInputValue('');
  };

  const handleReset = () => {
    setArr([]);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSort = async () => {
    const arrCopy = [...arr];
    const outputElements = document.getElementById('output-visualizer');
    outputElements.innerHTML = '';

    for (let i = 0; i < arrCopy.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arrCopy.length; j++) {
        if (arrCopy[j] < arrCopy[min]) {
          min = j;
        }
      }

      await sleep(1000);

      const div = document.createElement('div');
      for (let j = 0; j < arrCopy.length; j++) {
        const node = document.createElement('span');
        const textnode = document.createTextNode(arrCopy[j]);
        node.appendChild(textnode);
        if (j < i) node.style.backgroundColor = '#40c896';
        if (j === min || j === i) node.style.backgroundColor = '#e6852c';
        div.appendChild(node);
      }
      outputElements.appendChild(div);

      if (min !== i) {
        [arrCopy[min], arrCopy[i]] = [arrCopy[i], arrCopy[min]];
      }

      await sleep(1000);

      const newDiv = document.createElement('div');
      for (let j = 0; j < arrCopy.length; j++) {
        const node = document.createElement('span');
        const textnode = document.createTextNode(arrCopy[j]);
        node.appendChild(textnode);
        if (j <= i || (i === arrCopy.length - 2 && j === arrCopy.length - 1)) {
          node.style.backgroundColor = '#40c896';
        }
        newDiv.appendChild(node);
      }
      outputElements.replaceChild(newDiv, div);
    }

    setArr(arrCopy);
  };

  return (
    <div>
      <section className="head">Selection Sort</section>
      <div id="input-visualizer">
        {arr.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
      <div className="container">
        <input
          type="number"
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button-green" onClick={handleAdd}>Add</button>
        <button className="button-blue" onClick={handleSort}>Sort</button>
        <button className="button-blue" onClick={handleReset}>Reset</button>
      </div>
      <div id="output-visualizer"></div>
    </div>
  );
}

export default SelectionSortVisualizer;
