let http = require('http');
let url = require('url');
let querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 8541;
const _GET = 'GET';
const _POST = 'POST';

const server = http.createServer((req, res) => {
    // console.log(req.method, req.url);
    // if (_GET == req.method) {
    //     let o = url.parse(req.url, true)
    //     console.log(o.query);
    // }
    if (_POST == req.method) {
        let tmp = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            tmp.push(chunk);
        });
        req.on('end', () => {
            let data = Buffer.concat(tmp).toString();
            console.log(querystring.parse(data));
        });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Hello World!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

