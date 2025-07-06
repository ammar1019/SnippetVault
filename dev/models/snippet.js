const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    code: { type: String, required: true },
    language: String,
    tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Snippet', snippetSchema);
