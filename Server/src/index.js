const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialise mongoose - connect to mongodb
mongoose.connect("mongodb://localhost:27017/Project2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialise app object
const app = express();
app.use(
  session({
    secret: "Secret word",
    resave: false,
    saveUninitialized: false,
  })
);

const port = 3000;

const alphabetRouter = require("./Routes/AlphaRoute");
const userRouter = require("./Routes/UserRoute");

app.use(express.json());
app.use(cors()); 

app.use("/api/alphabet", alphabetRouter);
app.use("/api/user", userRouter);

// Start your server by listening for requests
app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);
