const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html'); // this says about the type of content being sent to the client
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } else if (req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is About page </h1>');
    }
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});