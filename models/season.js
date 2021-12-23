// our first collection schema
// season schema
const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
    url: String,
    title: { type: String, required: true },
    imague_url: String,
    synopsis: String,
});

const Season = mongoose.model("Season", seasonSchema);

module.exports = Season;