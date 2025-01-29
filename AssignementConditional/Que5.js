let num = 1;

// Ascending Order
console.log("Numbers in Ascending Order:");
while (num <= 25) {
    process.stdout.write(num + " "); // Print numbers on the same line
    num++;
}

console.log("\n"); // Line break

// Descending Order
num = 25; // Reset num to 25
console.log("Numbers in Descending Order:");
while (num >= 1) {
    process.stdout.write(num + " "); // Print numbers on the same line
    num--;
}
