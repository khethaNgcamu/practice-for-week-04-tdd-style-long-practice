// Your code here
const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");
// const { reciprocal } = require("../problems/")

describe("returnsThree", function(){
    it("should return mumber 3", function(){
        const result = returnsThree();
        expect(result).to.equal(3);
    });
});

describe("reciprocal", function(){
    it("should return a reciprocal of a positive number", function(){
        const number = 2;
        const expectedOutput = 1 / number;
        const result = reciprocal(number);
        expect(result).to.equal(expectedOutput);
    });

    // it("should return a reciprocal of a negative number", function(){
    //     const number = -2;
    //     const expectedOutput = 1 / number;
    //     const result = reciprocal(number);
    //     expect(result).to.equal(expectedOutput);
    // });

    it("should return a reciprocal of a fraction", function(){
        const number = 0.5;
        const expectedOutput = 1 / number;
        const result = reciprocal(number);
        expect(result).to.equal(expectedOutput);
    });

    it("should return Infinity for zero", function(){
        const number = 0;
        const expectedOutput = Infinity;
        const result = reciprocal(number);
        expect(result).to.equal(expectedOutput);
    });

    it("should throw a RangeError if argument is less than or equal to 0", function(){
        // expect(() => reciprocal(0)).to.throw(RangeError, "Argument must be between 1 and 1000000");
        expect(() => reciprocal(-1)).to.throw(RangeError, "Argument must be between 1 and 1000000");
    });
    
    it("should throw a RangeError if argument is greater than 1000000", function(){
        expect(() => reciprocal(1000001)).to.throw(RangeError, "Argument must be between 1 and 1000000");
    });
});