let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/worldmap-natt.png') {
    myImage.setAttribute('src', 'images/worldmap-natt2.png');
  } else {
    myImage.setAttribute('src', 'images/worldmap-natt.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myHeading.textContent + myName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my world!, ' + myName;
  }
}


if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my world!, ' + storedName;
}

