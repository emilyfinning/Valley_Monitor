const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const AWS = require("aws-sdk");

const DynamoService = require("./Services/DynamoDBService");

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

app.get("/farms/:email", async (req, res) => {
  const response = await DynamoService.getFarmList(client, req.params.email);
  res.contentType = "application/json";
  res.send(response);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
