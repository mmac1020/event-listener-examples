const someFunc = function() {
  console.log(this);
}

someFunc();

const person = {
  name: 'person',
  sayHi: function() {
    console.log(`Hi, my name is: ${this.name}`)
  },
  sayHiArrow: () => {
    console.log(this);
    console.log(`Hi, my name is ${this.name}`)
  }
}

person.sayHi();

person.sayHiArrow();

const mac = {
  name: 'Mac'
}

person.sayHi.call(mac);

person.sayHi.apply(mac);

const macSayHi = person.sayHi.bind(mac);

macSayHi();