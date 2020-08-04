const buttonContainer = document.getElementById('buttonContainer');

const buttonOne = document.getElementById('buttonOne');

function mouseOver (event) {
  console.log(`event: ${event}`);
  console.log(`target: ${event.target}`);
  console.log(`this: ${this}`);
}

buttonContainer.addEventListener('mouseover', mouseOver);

buttonOne.addEventListener('mouseover', mouseOver);