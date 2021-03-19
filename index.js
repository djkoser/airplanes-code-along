require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require('./controller.js');


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString:CONNECTION_STRING,
  ssl:{rejectUnauthorised:false}
})
.then(dbInstance =>

  app.set("db", dbInstance));
  app.use(express.json());
  app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});

app.get("/api/planes/getPlanes/:passenger", controller.getPlanes);

app.get("/api/planes/newPlanes", controller.newPlanes);

app.get("/api/planes/clearPlanes", controller.clearPlanes);

app.get("/api/planes/initializePlanes", controller.dropPlanes);

app.get("/api/planes/initializePlanes", controller.initializePlanes);

app.get("/api/planes/dropPlanes", controller.dropPlanes);
