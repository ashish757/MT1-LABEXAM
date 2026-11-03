import express from 'express';

const app = express();


app.use(express.json());


let tasks = [
    {
        id: 1,
        taskName: 'Develop Login Page',
        assignedTo: 'Rahul Sharma',
        status: 'Pending',
        priority: 'High'
    },
    {
        id: 2,
        taskName: 'Design Dashboard',
        assignedTo: 'Amit Kumar',
        status: 'Completed',
        priority: 'Medium'
    },
    {
        id: 3,
        taskName: 'Create Database Schema',
        assignedTo: 'Priya Singh',
        status: 'In Progress',
        priority: 'High'
    }
];

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Express Server running at http://localhost:${PORT}`);
});