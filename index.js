const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedDetails = courses.filter(c => c.id == id);
  res.send(selectedDetails);
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedItems = courses.find(c => c.id == id);
  res.send(selectedItems);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})