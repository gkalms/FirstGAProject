const express = require("express");
const WordsApi = require("../Models/WordsModel");
const AlphabetApi = require("../Models/AlphabetModel");

const router = express.Router();

//Create the alphabet category
router.post("/alphabet", (request, response) => {
  const requestBody = request.body;
  AlphabetApi.create(requestBody).then((data) => {
    response.send(data);
  }).catch(() => {
    response.status(500).send("unable to create alphabet category");
  });
});

//get alphabet list
router.get("/alphabet/all", (request, response) => {
  AlphabetApi.find().then((data) => {
    response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot upload alphabet list");
  });
});

// create words
router.post("/words", (request, response) => {
  const requestBody = request.body;
  WordsApi.create(requestBody).then((data) => {
    response.send(data);
  }).catch(() => {
    response.status(500).send("unable to create the word");
  });
});

//get words
router.get("/words/all", (request, response) => {
  WordsApi.find().then((data) => {
    response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot upload words' list");
  });
});

//get words random
router.get("/words/random", (request, response) => {
  
  WordsApi.find().then((data) => {
    let input = e.target.innerHTML;
    const randomWords = words[input]; 
    const randomIndex = Math.floor(Math.random() * Math.floor(randomWords.length));
    const randomWord = randomWords[randomIndex];
    $("p").append(`${randomWord} `);
  response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot upload words' list");
  });
});


// update words
router.patch("/update-word/:id", (request, response) => {
  WordsModel.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
    upsert: true,
  })
    .then((data) => {
      console.log("Update successful!");
      response.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("Word was not found!!");
    });
});


// delete words
router.delete("/delete-word/:id", (request, response) => {
  WordsModel.findByIdAndDelete(request.params.id)
    .then((data) => {
      console.log("Delete successful!");
      response.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("Word was not found!!");
    });
});

module.exports = router;