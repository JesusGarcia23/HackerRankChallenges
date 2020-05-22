// Function Description

// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

// compareTriplets has the following parameter(s):

// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating

// Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    for(let i = 0; i < a.length; i++) {
      if(a[i] > b[i]) {
        pointsA++;
      }else if(a[i] < b[i]) {
        pointsB++;
      }
    }
    return [pointsA, pointsB];
  }