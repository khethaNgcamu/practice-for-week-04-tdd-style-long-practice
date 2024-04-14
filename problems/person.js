class Person {
  // Your code here
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}.`;
}

visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
}

switchVisit(otherPerson) {
    return otherPerson.visit(this);
}

update(obj) {
  if (typeof obj !== 'object' || obj === null) {
      throw new TypeError("Argument must be an object");
  }

  if (!('name' in obj) || !('age' in obj)) {
      throw new TypeError("Object must have 'name' and 'age' properties");
  }

  this.name = obj.name;
  this.age = obj.age;
}

static greetAll(array){
  return array.map((person) => person.sayHello());
}
}

module.exports = Person;