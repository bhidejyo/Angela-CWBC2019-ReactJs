import React from "react";
import ReactDOM from "react-dom";

const firstname = "Jyoti";
const lastname = "Bhide";
const yourLuckyNumber = 6;

ReactDOM.render(
  <div>
    <h1>
      {" "}
      Hello {firstname} {lastname}!{" "}
    </h1>
    <h1>Hello {firstname + " " + lastname + "!"}</h1>
    <p>Your Lucky Number is {yourLuckyNumber} </p>
    <p>Calculate 3+4 = {3 + 4} </p>
    <p>A random lucky number = {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
