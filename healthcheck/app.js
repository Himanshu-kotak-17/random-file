const express = require('express');
const app = express();
const port = 3000;

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Your other routes and middleware
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
