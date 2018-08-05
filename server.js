const express = require('express');
const path = require('path');
const app = express();

app.get('/api/ping', (req, res) => {
  res.json({
    it: "works"
  })
});

app.listen(process.env.PORT || 8080, () => {
  console.log("express runing! in 8080");
});
