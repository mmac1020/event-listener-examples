const button = document.getElementById('alert');

function buttonClicked(event) {
  alert('Button was clicked!');
}

button.addEventListener('click', buttonClicked);

function documentClicked(event) {
  alert('Document was clicked!');
}

document.addEventListener('click', documentClicked);

function windowClicked(event) {
  alert('Window was clicked!');
}

window.addEventListener('click', windowClicked);