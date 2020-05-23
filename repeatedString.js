// Function Description

// Complete the repeatedString function in the editor below. 
// It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

// THIS WORKS BUT HACKERRANK IS A PIECE OF SHIT
function repeatedString(s, n) {
    return s.repeat(n).substring(0, n).match(/a/g).length;
  }