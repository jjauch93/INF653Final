const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funFactSchema = new Schema({
    stateCode: { type: String, required: true, unique: true },
    funfacts: [String]
});

module.exports = mongoose.model("FunFact", funFactSchema);