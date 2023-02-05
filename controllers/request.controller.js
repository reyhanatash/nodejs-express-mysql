var fs = require('fs');
const Request = require("../models/request.model");
const requestController = {};
const { Op } = require("sequelize");

requestController.insert = async (req, res) => {
  try {
    var array = fs.readFileSync('./logs.txt').toString().split("\n");
    for (i in array) {
      console.log(array[i]);
      let items = array[i].split(" ");
      let req = await Request.create({
        servicename: items[0],
        startdate: items[2],
        route: items[4],
        statuscode: items[6],
      });
    }
    return res.json({
      ok: true,
      msg: "Data inserted successfully"
    });

  } catch (err) {
    console.error("Database error:", err);
    return res.json({
      ok: false,
      msg: "Insert failed",
      info: err,
    });
  }
};

requestController.lists = async (req, res) => {
  try {
    let service = req.params.servicename;
    let date = req.params.startdate;
    let status = req.params.statuscode;
    let query = {
      [Op.or]: [
        { servicename: service },
        { startdate: date },
        { statuscode: status }
      ]
    };

    await Request.findAll(
      {
        where: query
      }
    ).then((r) => {
      console.log(
        "lists method established successfully.".bgGreen.black
      );
      return res.json({
        ok: true,
        msg: "GET Method",
        info: r,
      });
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    return res.json({
      ok: false,
      msg: "GET Method",
      info: err,
    });
  }
};


module.exports = requestController;
