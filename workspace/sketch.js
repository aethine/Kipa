let hasSetup = false

function getInput() {return document.getElementsByName("kipa-input")[0]}
function getText() {return getInput().value}
function setInput(value) {
  currentText = value
  getInput().value = value
}

function setup() {
  for (const top of Object.values(allDiacritics)) {
    for (const symb of Object.values(top)) {
      symbols += symb
    }
  }
  hasSetup = true
}


function update() {
  while (!hasSetup) {} // wait
  setInput(crawl(getText()))
}
function reset() {
  setInput("")
}


;(function() {
  document.addEventListener('DOMContentLoaded', function() {
    setup()
 }, false);
})()