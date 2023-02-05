const requestController = require("../controllers/request.controller");
// const { checkValidator } = require("../middlewares/check.validator");
// const { body, param } = require("express-validator");
const express = require("express");
const app = express();


app.get("/insertData", requestController.insert);



app.get(
  "/find/:servicename/:statuscode/:startdate",
  requestController.lists
);

module.exports = app;
