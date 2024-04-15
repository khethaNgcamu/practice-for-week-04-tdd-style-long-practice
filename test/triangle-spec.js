// Your code here
const { expect } = require("chai");
const Triangle = require("../problems/triangle");

describe("Triangle", function(){
    let triangle;

    // Define side lengths
    const side1 = 3;
    const side2 = 4;
    const side3 = 5;

    // Create Triangle instance
    beforeEach(function() {
        triangle = new Triangle(side1, side2, side3);
    });

    it("should create a Triangle instance with side1, side2, and side3 as properties", function(){
        expect(triangle).to.have.property("side1");
        expect(triangle).to.have.property("side2");
        expect(triangle).to.have.property("side3");
    });

    it("should assign properties correctly", function(){
        expect(triangle.side1).to.equal(3);
        expect(triangle.side2).to.equal(4);
        expect(triangle.side3).to.equal(5);
    });

    it("should calculate the paremeter", function(){
        const perimeter = triangle.getPerimeter();
        expect(perimeter).to.be.equal(12);
    });

    it("should return true if it is a valid triangle or false otherwise", function(){
        const isTriangle = triangle.hasValidSideLengths();
        expect(isTriangle).to.be.true;
    });

    it("should set a flag to true if it is a valid tringle", function(){
        const invalidTriangle = new Triangle(1, 2, 10);
        invalidTriangle.validate();
        expect(invalidTriangle.isValid).to.be.false;
    });

    it('should return valid triangles from an array of triangle instances', function() {
        const triangle1 = new Triangle(3, 4, 5); // Valid triangle
        const triangle2 = new Triangle(1, 2, 10); // Invalid triangle
        const triangle3 = new Triangle(5, 12, 13); // Valid triangle
    
        const validTriangles = Triangle.getValidTriangles(triangle1, triangle2, triangle3);
    
        expect(validTriangles).to.be.an('array').that.includes(triangle1);
        expect(validTriangles).to.be.an('array').that.does.not.include(triangle2);
        expect(validTriangles).to.be.an('array').that.includes(triangle3);
      });

      it('should return an empty array if no valid triangles are found', function() {
        const triangle1 = new Triangle(1, 2, 10); // Invalid triangle
        const triangle2 = new Triangle(2, 3, 6); // Invalid triangle
      
        const validTriangles = Triangle.getValidTriangles(triangle1, triangle2);
      
        expect(validTriangles).to.be.an('array').that.is.empty;
      });
});





  