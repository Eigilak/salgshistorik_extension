import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("content");
  document.body.insertBefore(newDiv, currentDiv);

  return newDiv;
}

export default function init() {
  return window.addEventListener("load", function () {
    const element = addElement();

    if (element) {
      ReactDOM.render(<App />, element);
    }
  });
}

init();
