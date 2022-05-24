const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const client = new AWS.DynamoDB.DocumentClient();
const tableName = "Farm";

const port = 3001;

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/rows/all", (req, res) => {
  const params = {
    TableName: tableName,
  };

  client.scan(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var items = [];
      for (var i in data.Items) {
        items.push(data.Items[i]["farmName"]);
      }
      res.contentType = "application/json";
      res.send(items);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
