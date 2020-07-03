// Given an array of integers, find the sum of its elements.

// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers

// Output Format

// Print the sum of the array's elements as a single integer.

function simpleArraySum(ar) {
    return ar.reduce((value, counter) =>  value + counter)
  }