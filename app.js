const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app .use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
  });
  
  app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'works.html'));
  });
  
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });