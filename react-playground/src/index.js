import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Button(props) {
  return (
    <button onClick={() => props.increment(props.incrementAmount)}>
      +{props.incrementAmount}
    </button >
  );
}

function Display(props) {
  return (
    <div>
      {props.message}
    </div>
  );
}

function AppTwo() {
  var [counter, setCounter] = useState(0);
  var incrementCounter = (amount) => setCounter(counter + amount);
  return (
    <>
      <Button increment={incrementCounter} incrementAmount={5} />
      <Button increment={incrementCounter} incrementAmount={10} />
      <Button increment={incrementCounter} incrementAmount={100} />
      <Button increment={incrementCounter} incrementAmount={1} />
      <Display message={counter} />
    </>
  );
}

ReactDOM.render(
  <AppTwo />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
