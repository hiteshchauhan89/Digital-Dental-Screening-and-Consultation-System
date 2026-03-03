const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Digital Dental Screening Backend Running');
});

const port = process.env.PORT || 8080;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});