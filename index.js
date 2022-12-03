const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const client = require('./connection');
const cors = require('cors');

const app = express();
app.use(cors())

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());

let data;

app.post("/api", (request, response) => {
  console.log("I got a request !");
  console.log(request.body);
  data = request.body;
  response.json({
    status: "success",
    query: data.q,
  });
});
  app.get("/api", (req, res) => {
    client.query(data.q, (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    });
  });


  const PORT = process.env.PORT || 3300;

  app.listen(PORT, console.log('app running'));
