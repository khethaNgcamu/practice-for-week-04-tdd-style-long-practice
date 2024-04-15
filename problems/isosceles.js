// isosceles.js

const Triangle = require("./triangle");

class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = this.hasValidSideLengths();
  }

  isIsosceles() {
    return ((this.side1 === this.side2 && this.side1 !== this.side3) ||
            (this.side1 === this.side3 && this.side1 !== this.side2) ||
            (this.side2 === this.side3 && this.side2 !== this.side1)) &&
            this.hasValidSideLengths();
  }

  validate() {
    this.isValidIsosceles = this.isIsosceles();
  }
}

module.exports = Isosceles;
