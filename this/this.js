const mac = {
  name: 'mac',
  sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHiArrow: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};
mac.sayHi();
const amaya = {
  name: 'amaya',
};
mac.sayHi.call(amaya);
const newSayHi = mac.sayHi.bind(amaya);
newSayHi();

// const buttonContainer = document.getElementById('buttonContainer');

// const buttonOne = document.getElementById('buttonOne');

// function mouseOver (event) {
//   console.log(`event: ${event}`);
//   console.log(`target: ${event.target}`);
//   console.log(`this: ${this}`);
// }

// buttonContainer.addEventListener('mouseover', mouseOver);

// buttonOne.addEventListener('mouseover', mouseOver);
