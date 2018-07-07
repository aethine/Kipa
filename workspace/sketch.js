/// <reference path="../p5.global-mode.d.ts" />

let currentText = ""
function getInput() {return document.getElementsByName("kipa-input")[0]}
function getText() {return getInput().value}
function setInput(value) {
  currentText = value
  getInput().value = value
}

function setup() {
  noCanvas()
  for (const top of Object.values(allDiacritics)) {
    for (const symb of Object.values(top)) {
      symbols += symb
    }
  }

  if (document.getElementsByName("kipa-input").length <= 0){
    console.error("Could not find kipa-input")
    noLoop()
  }
  if (document.getElementsByName("kipa-reset").length > 0) {
    const button = document.getElementsByName("kipa-reset")[0]
  }
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
function reset() {
  setInput("")
}