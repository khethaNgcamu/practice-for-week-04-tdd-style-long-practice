// Your code here
const chai = require("chai");
const { expect } = require("chai");
const chaiSpies = require("chai-spies");
chai.use(chaiSpies);
const sinon = require('sinon');

const Person = require("../problems/person");

describe("Person", function() {
    let person;

    beforeEach(() => {
        person = new Person("Mai", 25);
    });

    it("should create a new instance of Person with name and age properties", function() {
        expect(person).to.be.an.instanceOf(Person);
        expect(person).to.have.property('name');
        expect(person).to.have.property('age');
    });

    it("should set the name and age properties correctly", function() {
        expect(person.name).to.equal("Mai");
        expect(person.age).to.equal(25);
    });

    it("should return a greeting message including the person's name", function() {
        const greeting = person.sayHello();
        expect(greeting).to.be.a('string');
        expect(greeting).to.include(person.name);
        expect(greeting).to.match(/hello/i); // Case-insensitive match for "hello"
    });

    it("should return a visit message stating that this person visited the passed-in person", function() {
        const person1 = new Person("Mai", 25);
        const person2 = new Person("Erin", 30);

        const visitMessage = person1.visit(person2);

        expect(visitMessage).to.be.a('string');
        expect(visitMessage).to.include(person1.name);
        expect(visitMessage).to.include(person2.name);
        expect(visitMessage).to.match(/visited/i); // Case-insensitive match for "visited"
    });

    it("should invoke the visit method of the parameter, passing the current instance as the argument", function() {
        const person1 = new Person("Mai", 25);
        const person2 = new Person("Erin", 30);
        const visitStub = sinon.stub(person2, 'visit');
        person1.switchVisit(person2);
        // expect(visitStub).to.have.been.calledOnceWith(person1);
        expect(visitStub.calledWith(person1)).to.be.true;
    });

    it("should throw a TypeError if the incoming argument is not an object", function() {
        const invalidArgument = 'not an object';
        expect(() => person.update(invalidArgument)).to.throw(TypeError, "Argument must be an object");
    });

    it("should update instance properties if the incoming argument is an object", function() {
        const obj = { name: "Erin", age: 30 };
        person.update(obj);
        expect(person.name).to.equal("Erin");
        expect(person.age).to.equal(30);
    });

    it("should throw a TypeError if the incoming object does not have a name and an age property", function() {
        const invalidObj = { gender: "female" };
        expect(() => person.update(invalidObj)).to.throw(TypeError, "Object must have 'name' and 'age' properties");
    });

    it("should return an array of greeting messages when given an array of Person instances", function() {
        const person1 = new Person("Mai", 25);
        const person2 = new Person("Erin", 30);
        const person3 = new Person("John", 35);
        const peopleArray = [person1, person2, person3];

        // Stub the sayHello method of each Person instance
        const sayHelloStub1 = sinon.stub(person1, 'sayHello').returns("Hello, Mai!");
        const sayHelloStub2 = sinon.stub(person2, 'sayHello').returns("Hello, Erin!");
        const sayHelloStub3 = sinon.stub(person3, 'sayHello').returns("Hello, John!");

        const greetings = Person.greetAll(peopleArray);

        // Ensure sayHello method was called on each Person instance
        // expect(sayHelloStub1).to.have.been.calledOnce;
        // expect(sayHelloStub2).to.have.been.calledOnce;
        // expect(sayHelloStub3).to.have.been.calledOnce;

        // expect(visitStub.calledOnce).to.be.true;

        // For the greetAll method
        expect(sayHelloStub1.called).to.be.true;
        expect(sayHelloStub2.called).to.be.true;
        expect(sayHelloStub3.called).to.be.true;

        // Ensure returned array contains the correct greeting messages
        expect(greetings).to.be.an('array');
        expect(greetings).to.have.lengthOf(3);
        expect(greetings).to.deep.equal(["Hello, Mai!", "Hello, Erin!", "Hello, John!"]);
    });
});

