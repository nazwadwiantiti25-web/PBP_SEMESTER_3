const http = require('http');
const port = 8000;

const data = {
    nama: "Naswa",
    matkul: "Pemrograman Berbasis Platform",
    server: "Node.js"
};

const student = [
    {
        name: "Naswa",
        class: "TI25E"
    },
    {
        name: "Ji Chang Wook",
        class: "TI25E"
    }
];

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Selamat datang di Web Server Node.js!');
    }

    else if (req.url === '/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data, null, 2));
    }

    else if (req.url === '/student') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(student, null, 2));
    }

    else if (req.url === '/siswa') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body><h2>Anda berada pada halaman siswa</h2></body></html>');
    }

    else if (req.url === '/dosen') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body><h2>Anda berada pada halaman dosen</h2></body></html>');
    }

    else if (req.url === '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body><h2>Anda berada pada halaman admin</h2></body></html>');
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<html><body><h2>Page Not Found (404)</h2></body></html>');
    }

});

server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});