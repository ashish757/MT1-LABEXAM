import http from 'http';

import fs from 'fs';
import path from 'path';


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

    else if (req.url === '/add-task' && req.method === 'POST') {

    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {

        try {
            const newTask = JSON.parse(body);

            const { id, taskName, assignedTo, status } = newTask;

            if (
                id === undefined ||
                !taskName ||
                !assignedTo ||
                !status
            ) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                });

                return res.end(JSON.stringify({
                    message: 'Missing required fields'
                }));
            }

            tasks.push(newTask);

            res.writeHead(201, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: 'Task added successfully',
                task: newTask
            }));

        } catch (error) {

            res.writeHead(400, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: 'Invalid JSON'
            }));

        }

    });

}

else if (req.url === '/home' && req.method === 'GET') {

    fs.readFile(
        path.join(process.cwd(), 'public', 'index.html'),
        'utf8',
        (err, data) => {

            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                return res.end('Error reading HTML file');
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(data);
        }
    );

}
else {

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message: 'Route not found'
    }));

}

});

server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});