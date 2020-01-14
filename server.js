const express = require('express');

const server = express();

const PORT = 4000

server.use('/api/project', project)

// server.use('/api/task', project)

// server.use('/api/resource', project)

server.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}`)
})