const buttonContainer = document.getElementById('buttonContainer');

function mouseOver (event) {
  event.target.className = 'button-hovered'
}

function mouseOut (event) {
  event.target.className = '';
}

function buttonClick(event) {
  console.log('click this context', this)
  console.log('event.target', event.target);
  if(event.target.tagName === 'BUTTON') {
    // do the button things
    console.log('I have hit a button!');
  }
  // else ignore
}

function buttonClickBackgroundChange (event) {
  if(event.target.tagName === 'BUTTON') {
    // do the button things
    // check each individual id, then do something different
    event.target.classList.toggle('button-click-toggle')
  }}

// const buttonOne = document.getElementsByClassName('')
// const buttonOne = document.getElementsByTagName
const buttonOne = document.getElementById('buttonOne')

buttonOne.addEventListener('click', function(event) {
  // I will no longer 'bubble up'
  event.stopPropagation()
  console.log('Button one has been clicked!');
})

buttonContainer.addEventListener('mouseover', mouseOver);
buttonContainer.addEventListener('mouseout', mouseOut);
buttonContainer.addEventListener('click', buttonClick);
// buttonContainer.addEventListener('click', buttonClickBackgroundChange);
