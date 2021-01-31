const mongoose = require("mongoose");

const wordsSchema = mongoose.Schema({
    name: String,
    alphabetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "alphabet"
    },
});

module.exports = mongoose.model("word", wordsSchema);