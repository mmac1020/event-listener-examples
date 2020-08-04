const someFunc = function() {
  console.log(this);
}

someFunc();

const person = function() {
  this.name = 'Person';
}

person.prototype.sayHi = function() {
  console.log(`Hi, my name is ${this.name}`);
};

person.prototype.arrowHi = () => {
  console.log(`Hi, my name is ${this.name}`);
}

const personInstance = new person();

personInstance.sayHi();

personInstance.arrowHi();

const mac = {
  name: 'Mac'
}

personInstance.sayHi.call(mac);

personInstance.sayHi.apply(mac);

const macSayHi = personInstance.sayHi.bind(mac);

macSayHi();