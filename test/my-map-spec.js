// Import chai and chai-spies for assertions and spying
const chai = require("chai");
const chaiSpies = require("chai-spies");
chai.use(chaiSpies);
const { expect } = chai;

const myMap = require("../problems/my-map");

// Your code here
describe("myMap", function(){
    it("callback should apply to each element of an array", function(){
        const arr = [1,2,3];
        const callback = chai.spy((ele) => ele * 2);

         // Spy on the built-in Array.map method
        //  const mapSpy = chai.spy.on(arr, "map");

        const result = myMap(arr, callback);

       // Ensure that the map method has been called with the provided callback function
        // chai.expect(mapSpy).to.have.been.called.with(callback);
    
        expect(result).to.deep.equal([2,4,6]);
        expect(callback).to.have.been.called.exactly(arr.length);
        expect(callback).to.have.been.called.with(1);
        expect(callback).to.have.been.called.with(2);
        expect(callback).to.have.been.called.with(3);
    });

    it("should not mutate the original array", function(){
        let myArr = [1, 2, 3];
        const result = myMap(myArr, (elem) => elem * 2);
        
        expect(myArr).to.deep.equal([1, 2, 3]);
        expect(result).to.deep.equal([2, 4, 6]);
    });
})