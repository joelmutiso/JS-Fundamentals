// Convert first argument to integer
const x = parseInt(process.argv[2]);

// Check if x is missing or not a number
if (!process.argv[2] || isNaN(x)) {
  // Print error message if no valid number is provided
  console.log("Missing number of occurrences");
} else if (x > 0) {
  // If x is positive, print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
// If x is zero or negative, do nothing (print nothing)