/// <reference path="../p5.global-mode.d.ts" />

let currentText = ""
function setup() {
  noCanvas()
}

function getInput() {return document.getElementsByName("kipa-input")[0]}
function getText() {return getInput().value}
function setInput(value) {
  currentText = value
  getInput().value = value
}

function draw() {
  const temp = getInput().value
  if (currentText !== temp) {
    currentText = temp
    update(currentText)
  }
}


function update(text) {
  console.log(text)
  if (text.endsWith("~.")) setInput(text.substr(0, text.length - 2) + "̥")
}