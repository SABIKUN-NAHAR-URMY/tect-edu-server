const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors());

const coursesData = require('./data/courses.json');
const courseDetails = require('./data/CoursesDetails.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res) => {
    res.send(coursesData);
})

app.get('/coursesDetail', (req, res) => {
  res.send(courseDetails);
})

app.get('/coursesDetail/:id', (req, res) => {
  const id = req.params.id;
  const selectedDetails = courseDetails.filter(cd => cd.courses_id === id);
  res.send(selectedDetails);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})