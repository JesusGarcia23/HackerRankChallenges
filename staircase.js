// Consider a staircase of size n = 4:

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer

// Note: The last line must have 0 spaces in it.

function staircase(n) {
    let string = "";
  for(let i = 1; i <= n; i++){
   let limiter = n - i;
   let j = 0;
   while(j < n) {
     if(j < limiter) { string += " "; }
     else { string += "#"; }
     j++;
   }
   string += "\n";
  }
   console.log(string);

}