function myMap(inputArray, callback) {
  // Your code here
      // Create a new array to store the mapped values
      const mappedArray = [];

      // Iterate over each element of the array and apply the callback function
      for (let i = 0; i < inputArray.length; i++) {
          // Call the callback function with the current element and push the result to the mapped array
          mappedArray.push(callback(inputArray[i], i, inputArray));
      }
  
      // Return the mapped array
      return mappedArray;
}

module.exports = myMap;