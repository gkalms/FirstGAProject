const express = require("express");
const userApi = require("../Models/UserModel");

const router = express.Router();

//Create user
router.post("/user", (request, response) => {
    const requestBody = request.body;
    userApi.create(requestBody).then((data) => {
      response.send(data);
    }).catch(() => {
      response.status(500).send("unable to create user");
    });
  });

  module.exports = router;

//   Get user
router.get("/user/all", (request, response) => {
    const requestBody = request.body;
    userApi.find(requestBody).then((data) => {

    });
});