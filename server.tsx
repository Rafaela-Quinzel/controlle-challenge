const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log(`App is running at th port:${port}`);
app.listen(port);