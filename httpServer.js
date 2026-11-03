import http from 'http';


const tasks = [
    {
        id: 1,
        taskName: 'Develop Login Page',
        assignedTo: 'Rahul Sharma',
        status: 'Pending'
    },
    {
        id: 2,
        taskName: 'Design Dashboard',
        assignedTo: 'Amit Kumar',
        status: 'Completed'
    }
];

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end('<h1>Welcome to Employee Task Management</h1>');

    }

    else if (req.url === '/tasks' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(tasks));

    }

    else if (req.url === '/about' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Employee Task Management Application');

    }

    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('404 Not Found');
    }

});

server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});