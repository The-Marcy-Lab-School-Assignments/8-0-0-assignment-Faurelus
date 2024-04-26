const express = require('express');
const app = express()

const serveInfo = (req, res, send) => {
  res.send('<h1>Hello<h1>')
}
const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
}
const serveWorld = (req, res, send) => {
  res.send('World')
}
const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`hello ${name}`);
}

app.get('/', serveIndex)
app.get('/about', serveInfo)
app.get('/api/world', serveWorld)
app.get('/api/hello', serveHello)
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));



