const express = require('express');
const fs = require('fs-extra');
const path = require('path');

const app = express();

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');

    // Print "Hello, World!" 100 times to the console
    for (let i = 0; i < 100; i++) {
        console.log('Hello, World!');
    }

    // Append "Hello, World!" 100 times to the existing JSON file
    const jsonFilePath = path.join(__dirname, 'hello.json');
    const newData = Array(100).fill('Hello, World!');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            let existingData = [];
            try {
                existingData = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }
            const combinedData = existingData.concat(newData);
            fs.writeFile(jsonFilePath, JSON.stringify(combinedData, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Error writing to file:', writeErr);
                } else {
                    console.log('File updated successfully:', jsonFilePath);
                }
            });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
