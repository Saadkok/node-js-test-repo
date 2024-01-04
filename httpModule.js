// Importing the 'http' module
const http = require('http');

// Creating an HTTP server using the 'createServer' method
// The server has a callback function that handles incoming requests and provides responses
const server = http.createServer((req, res) => {
    
    // Handling the case where the request URL is '/'
    if (req.url === '/') {
        res.end("Welcome to our home page");
    }

    // Handling the case where the request URL is '/about'
    if (req.url === '/about') {
        res.end('History');
    }

    // Handling other cases (404 Not Found)
    res.end(`
    <h1> Ooops !</h1>
    <p> We can't seem to find the page you are looking for. </p>
    <a href="/">Back home</a>
    `);
});

// Making the server listen on port 5000
server.listen(5000);
