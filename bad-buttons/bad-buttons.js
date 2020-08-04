const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const buttonThree = document.getElementById('buttonThree');
const buttonFour = document.getElementById('buttonFour');

function mouseOver (event) {
  event.target.className = 'button-hovered'
}

function mouseOut (event) {
  event.target.className = '';
}

buttonOne.addEventListener('mouseover', mouseOver);
buttonTwo.addEventListener('mouseover', mouseOver);
buttonThree.addEventListener('mouseover', mouseOver);
buttonFour.addEventListener('mouseover', mouseOver);

buttonOne.addEventListener('mouseout', mouseOut);
buttonTwo.addEventListener('mouseout', mouseOut);
buttonThree.addEventListener('mouseout', mouseOut);
buttonFour.addEventListener('mouseout', mouseOut);