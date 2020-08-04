const button = document.getElementById('alert');

function buttonClicked(event) {
  alert('Button was clicked!');
}

button.addEventListener('click', buttonClicked);