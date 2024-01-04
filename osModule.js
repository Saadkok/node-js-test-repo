// Importing the 'log' method from the 'console' module and assigning it to a variable named 'log'.
const { log } = require('console');

// Importing the 'os' module and assigning it to a variable named 'os'.
const os = require('os');

// Getting information about the current user and assigning it to a variable named 'user'.
const user = os.userInfo();

// Logging the 'user' object to the console, which contains information about the current user.
log(user);

// Logging a string that includes the system uptime in seconds using the 'os.uptime' method.
log(`The system uptime is ${os.uptime} seconds`);


// Creating an object named 'currentOs' to store information about the current operating system.
const currentOs = {
    // Assigning the type of the operating system to the 'name' property.
    name: os.type(),

    // Assigning the release version of the operating system to the 'release' property.
    release: os.release(),

    // Assigning the total memory of the system to the 'totalMen' property.
    totalMen: os.totalmem(),

    // Assigning the free memory available in the system to the 'freeMen' property.
    freeMen: os.freemem(),
};

// Logging the 'currentOs' object to the console, which contains information about the operating system.
console.log(currentOs);
