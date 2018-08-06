const express = require('express');
const path = require('path');
const data = require('./data/index.json');

const app = express();

app.get('/api/surveys',(req, res) => {
  res.json(data);
})

app.get('/api/survey_results/:id',(req, res) => {
  const id = req.params.id;
  const survey_results = `./data/survey_results/${id}.json`;
  res.json(require(survey_results));
})

app.listen(process.env.PORT || 8080, () => {
  console.log("**************************");
  console.log("express runing! in 8080");
  console.log("**************************");
});
