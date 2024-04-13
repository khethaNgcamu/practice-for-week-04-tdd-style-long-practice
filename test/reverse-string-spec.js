// Your code here
const {expect} = require("chai");
const {reverseString} = require("../problems/reverse-string");

describe('reverseString', function(){
 it("should reverse a string", function() {
    const input = "fun";
    const expectedInput = "nuf";

    const result = reverseString(input);
    expect(result).to.equal(expectedInput);
 });

 it("should throw a TypeError when input is not a string", function () {
    const invalidInput = 123; // Not a string
    expect(() => reverseString(invalidInput)).to.throw(TypeError);
  });
})
