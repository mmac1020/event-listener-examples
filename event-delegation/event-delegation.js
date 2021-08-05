const buttonContainer = document.getElementById('buttonContainer');

function mouseOver(event) {
  console.log('button container event target', event.target);
  console.log('container this', this);
  event.target.style.backgroundColor = '';
  event.target.classList.add('button-hovered');
}

function mouseOut(event) {
  event.target.classList.remove('button-hovered');
}

const buttonOne = document.getElementById('buttonOne');

buttonOne.addEventListener('mouseover', (event) => {
  event.stopPropagation();
  console.log('this', this);
  console.log('buttonOne event', event.target);
  event.target.style.backgroundColor = 'pink';
});

buttonOne.addEventListener('mouseout', (event) => {
  event.stopPropagation();
  event.target.style.backgroundColor = '';
});

buttonContainer.addEventListener('mouseover', mouseOver);
buttonContainer.addEventListener('mouseout', mouseOut);
