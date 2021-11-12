const mac = {
  name: 'mac',
  sayHi() {
    console.log('this: ', this);
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHiArrow: () => {
    console.log('this: ', this);
    console.log(`Hello, my name is ${this.name}`);
  },
};
// mac.sayHi();
// mac.sayHiArrow();
const liz = {name: 'liz'};
// mac.sayHi.call(liz);
const lizSayHi = mac.sayHi.bind(liz);
lizSayHi()

// const buttonContainer = document.getElementById('buttonContainer');

// const buttonOne = document.getElementById('buttonOne');

// function mouseOver (event) {
//   console.log(`event: ${event}`);
//   console.log(`target: ${event.target}`);
//   console.log(`this: ${this}`);
// }

// buttonContainer.addEventListener('mouseover', mouseOver);

// buttonOne.addEventListener('mouseover', mouseOver);
