// Importing the 'lodash' library and assigning it to the variable '_'
const _ = require('lodash');

// An array named 'items' containing nested arrays
const items = [1, [2, [3, [4]]]];

// Using the 'flattenDeep' function from lodash to flatten the nested arrays
const newItems = _.flattenDeep(items);

// Logging the result of the flattening process to the console
console.log(newItems);
