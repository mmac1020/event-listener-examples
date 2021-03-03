const mac = {
  name: 'mac',
  sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHiArrow: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const Elisa = { name: 'Elisa' };
mac.sayHi.call(mac);
const elisaSayHi = mac.sayHi.bind(Elisa);
elisaSayHi();
mac.sayHi();
// mac.sayHi();
// mac.sayHiArrow();

// const buttonContainer = document.getElementById('buttonContainer');

// const buttonOne = document.getElementById('buttonOne');

// function mouseOver (event) {
//   console.log(`event: ${event}`);
//   console.log(`target: ${event.target}`);
//   console.log(`this: ${this}`);
// }

// buttonContainer.addEventListener('mouseover', mouseOver);

// buttonOne.addEventListener('mouseover', mouseOver);
