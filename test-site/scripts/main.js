//alternate the display of one of two images. This change will happen as a user clicks the displayed image.//

let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'IVI, ' + myName;
  }
}

    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.textContent = 'IVI, ' + storedName;
    }

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kiienka-main.jpg') {
      myImage.setAttribute('src','images/kiienka-tracklist.jpg');
    } else {
      myImage.setAttribute('src','images/kiienka-main.jpg');
    }
}

myButton.onclick = function() {
  setUserName();
}
