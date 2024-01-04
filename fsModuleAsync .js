// Importing 'readFile' and 'writeFile' functions from the 'fs' (File System) module
const { readFile, writeFile } = require('fs');

// Reading the content of the file 'frst.txt' asynchronously using 'readFile'
// The file is assumed to be in the './content/' directory, and 'utf8' is the character encoding
readFile('./content/frst.txt', 'utf8', (err, result) => {
  // Callback function executed once the file reading is complete or encounters an error

  // Checking if there's an error during file reading
  if (err) {
    console.log(err); // Output the error to the console
    return; // Exit the function if there's an error
  }
;l/
  // Output the content of the file to the console
  console.log(result);

  // The 'return' statement here doesn't affect the behavior of the program because
  // it's within a callback function and doesn't impact the overall flow of the code
  return;
});



