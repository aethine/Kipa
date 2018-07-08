function getInput() {return document.getElementsByName("kipa-input")[0]}
function getText() {return getInput().value}
function setInput(value) {
  currentText = value
  getInput().value = value
}


function update() {
  setInput(crawl(getText()))
}
function reset() {
  setInput("")
}