const express = require("express");
const WordsApi = require("../Models/WordsModel");
const AlphabetApi = require("../Models/AlphabetModel");

// Create a new router to handle alphabet/words routes
const router = express.Router();

//Create the alphabet category collection via postman
router.post("/alphabet", (request, response) => {
    const requestBody = request.body;
    AlphabetApi.create(requestBody).then((data) => {
      response.send(data);
    }).catch(() => {
      response.status(500).send("unable to create category");
    });
  });

  //get all input from Alphabet document
router.get("/alphabet/all", (request, response) => {
    AlphabetApi.find().then((categories) => {
      response.send(categories);
    }).catch((error) => {
      console.log('error', error);
      response.status(500).send("cannot load categories");
    });
    });
    
// pre-poulate word document in relation to alphabet
router.post("/words", (request, response) => {
  const requestBody = request.body;
  WordsApi.create(requestBody).then((data) => {
    response.send(data);
  }).catch(() => {
    response.status(500).send("unable to create the word");
  });
});
 
    module.exports = router;