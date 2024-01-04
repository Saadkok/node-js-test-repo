// Importing the readFileSync and writeFileSync functions from the 'fs' (file system) module
const { readFileSync, writeFileSync } = require('fs');

// Reading the content of the file 'frst.txt' synchronously and storing it in the variable 'first'
const first = readFileSync('./content/frst.txt', 'utf8');

// Reading the content of the file 'second.txt' synchronously and storing it in the variable 'second'
const second = readFileSync('./content/second.txt', 'utf8');

// Logging the content of 'first' and 'second' to the console
console.log(first, second);

// Writing a new file 'resultSync.txt' synchronously with a string template
writeFileSync('./content/resultSync.txt',
  `here is the result : ${first},${second}`
);
