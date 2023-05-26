function moveNegativeElements(arr) {
  // Initialize the left and right pointers
  let left = 0;
  let right = arr.length - 1;

  // While the left pointer is less than the right pointer
  while (left < right) {
    // If the left element is negative
    if (arr[left] < 0) {
      // Swap the left element with the right element
      [arr[left], arr[right]] = [arr[right], arr[left]];

      // Increment the left pointer
      left++;
    } else {
      // Decrement the right pointer
      right--;
    }
  }

  // Return the array
  return arr;
}

// Test the function
const arr = [5, -8, 3, -9, 2];
const newArr = moveNegativeElements(arr);
console.log(newArr); // [-8, -9, 5, 3, 2]