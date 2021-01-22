const mongoose = require("mongoose");

//define words schema 
const wordsSchema = mongoose.Schema({
    name: String,
    alphabetId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "alphabet"
    }
});

//export model to be used by the router
module.exports = mongoose.model("word",wordsSchema);