// Defining an object named "saad" with a property "myName" set to "SAAD".
saad = {
    myName: "SAAD"
}

// Logging information about the module system in Node.js, including exports, require, module, __filename, and __dirname.
console.log(exports, require, module, __filename, __dirname);

// Exporting the "saad" object as the module's content using module.exports.
module.exports = saad;


const num1 =7;
const num2 =23;

add = () =>{
    console.log( num1 + num2);
}

add()

module.exports.sin = {add};