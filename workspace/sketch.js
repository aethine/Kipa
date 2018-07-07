/// <reference path="../p5.global-mode.d.ts" />

let currentText = ""
function getInput() {return document.getElementsByName("kipa-input")[0]}
function getText() {return getInput().value}
function setInput(value) {
  currentText = value
  getInput().value = value
}
function posInput(x, y) {
  getInput().style.left = x
  getInput().style.top = y
}

function setup() {
  noCanvas()
  //posInput(-100, -100)
}

function draw() {
  const temp = getInput().value
  if (currentText !== temp) {
    currentText = temp
    update(currentText)
  }
}


function update(text) {
  if (text.length < 2) return

  let key = text.substr(-2, 2)

  console.log("base:", key[0])
  let diacritic_base = allDiacritics[key[0]]
  if (diacritic_base === undefined) return

  console.log("sub:", key[1])
  let diacritic = diacritic_base[key[1]]
  if (diacritic !== undefined) {
    setInput(text.substr(0, text.length - 2) + diacritic)
  }
}