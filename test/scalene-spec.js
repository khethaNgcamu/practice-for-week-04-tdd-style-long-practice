// Scalene-spec.js

const { expect } = require("chai");
const Triangle = require("../problems/triangle");
const Scalene = require("../problems/scalene");

describe("Scalene", function() {
  // Define side lengths
  const side1 = 3;
  const side2 = 4;
  const side3 = 5;

  // Create Scalene instance
  let scalene;

  beforeEach(function() {
    scalene = new Scalene(side1, side2, side3);
  });

  it("should inherit from the Triangle class", function() {
    expect(scalene instanceof Triangle).to.be.true;
  });

  it("should create a Scalene instance with side1, side2, and side3 as properties", function() {
    expect(scalene).to.have.property("side1");
    expect(scalene).to.have.property("side2");
    expect(scalene).to.have.property("side3");
  });

  it("should have an isValidTriangle property derived from Triangle class", function() {
    expect(scalene).to.have.property("isValidTriangle").that.is.a("boolean");
  });

  it("should have a method isScalene() that returns true for a valid scalene triangle", function() {
    expect(scalene.isScalene()).to.be.true;
  });

  it("should have a method isScalene() that returns false for an invalid scalene triangle", function() {
    const invalidScalene = new Scalene(3, 3, 3); // Equilateral triangle
    expect(invalidScalene.isScalene()).to.be.false;
  });

  it("should have a validate() method that overrides the method in the Triangle class", function() {
    scalene.validate(); // Override should set isValidScalene property
    expect(scalene).to.have.property("isValidScalene").that.is.a("boolean");
  });
});
