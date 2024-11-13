const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/sensor-data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/sensorData.json', 'utf8'));
  res.json(data);
});

app.get('/dashboard', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/sensorData.json', 'utf8'));
  res.render('dashboard', { data: data });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
