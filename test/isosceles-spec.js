// isosceles-spec.js

const { expect } = require("chai");
const Triangle = require("../problems/triangle");
const Isosceles = require("../problems/isosceles");

describe("Isosceles", function() {
  // Define side lengths
  const side1 = 3;
  const side2 = 4;
  const side3 = 4; // Isosceles triangle

  // Create Isosceles instance
  let isosceles;

  beforeEach(function() {
    isosceles = new Isosceles(side1, side2, side3);
  });

  it("should inherit from the Triangle class", function() {
    expect(isosceles instanceof Triangle).to.be.true;
  });

  it("should create an Isosceles instance with side1, side2, and side3 as properties", function() {
    expect(isosceles).to.have.property("side1");
    expect(isosceles).to.have.property("side2");
    expect(isosceles).to.have.property("side3");
  });

  it("should have an isValidTriangle property derived from Triangle class", function() {
    expect(isosceles).to.have.property("isValidTriangle").that.is.a("boolean");
  });

  it("should have a method isIsosceles() that returns true for a valid isosceles triangle", function() {
    expect(isosceles.isIsosceles()).to.be.true;
  });

  it("should have a method isIsosceles() that returns false for an invalid isosceles triangle", function() {
    const invalidIsosceles = new Isosceles(3, 3, 6); // Not isosceles triangle
    expect(invalidIsosceles.isIsosceles()).to.be.false;
  });

  it("should have a validate() method that overrides the method in the Triangle class", function() {
    isosceles.validate(); // Override should set isValidIsosceles property
    expect(isosceles).to.have.property("isValidIsosceles").that.is.a("boolean");
  });
});
