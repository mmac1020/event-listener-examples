const buttonContainer = document.getElementById('buttonContainer');

function mouseOver (event) {
  event.target.className = 'button-hovered'
}

function mouseOut (event) {
  event.target.className = '';
}

buttonContainer.addEventListener('mouseover', mouseOver);
buttonContainer.addEventListener('mouseout', mouseOut);