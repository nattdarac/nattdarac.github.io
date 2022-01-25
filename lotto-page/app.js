/* Return a single random integer between min and max inclusive */
function getRandomInt(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function showNumbers() {
  for (let i = 0; i <6; i++) {
    let numberElement= document.getElementById("number"+i)
    let randomNumber = getRandomInt(0, 9)
    numberElement.value=randomNumber
  }
}

document.getElementById("number").onclick = showNumbers


