/// <reference path="../p5.global-mode.d.ts" />

let currentText = ""
function getInput() {return document.getElementsByName("kipa-input")[0]}
function getText() {return getInput().value}
function setInput(value) {
  currentText = value
  getInput().value = value
}
// function posInput(x, y) {
//   getInput().style.paddingLeft = x
//   getInput().style.paddingTop = y
// }

function setup() {
  noCanvas()
  for (const top of Object.values(allDiacritics)) {
    for (const symb of Object.values(top)) {
      symbols += symb
    }
  }
  console.log(symbols)
  // posInput(-100, -100)
}

function draw() {
  const temp = getInput().value
  if (currentText !== temp) {
    currentText = temp
    update(currentText)
  }
}


function update(text) {
  setInput(crawl(text))
}