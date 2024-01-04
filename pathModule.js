// Importing the 'log' method from the 'console' module.
const { log } = require('console');

// Importing the 'path' module.
const path = require('path');

// Logging the platform-specific file path separator (e.g., '\' on Windows, '/' on Unix-like systems).
log('Platform File Separator:', path.sep);

/************************************************************************************************** */
              
const filepath = path.join('/content', 'txt.txt');// Creating a file path by joining the '/content' directory and the 'txt.txt' file.


log('Created File Path:', filepath);//Logging the resulting file path.


/************************************************************************************************** */
// Extracting the file base name from the 'filepath'.
const base = path.basename(filepath);

// Logging the base name of the file.
log('File Base Name:', base);

// Creating an absolute file path by joining the '__dirname', 'content' directory, and 'txt.txt'.
const absolute = path.resolve(__dirname, 'content', 'txt.txt');

// Logging the absolute file path.
log('Absolute File Path:', absolute);



