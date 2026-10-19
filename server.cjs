// Load Express and create the server application.
const express = require('express');
const app = express();
const PORT = 3000;

// Allow the server to read JSON sent in requests.
app.use(express.json());

// A test endpoint to confirm the backend works.
app.get('/api/health', (req, res) => {
  res.json({ message: 'Family Recipe API is running!' });
});

// Start listening for requests.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});