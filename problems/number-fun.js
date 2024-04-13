function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if(n === 0){
    return Infinity;
  }
  if (n < 0 || n > 1000000) {
    throw new RangeError("Argument must be between 1 and 1000000");
  }

  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};