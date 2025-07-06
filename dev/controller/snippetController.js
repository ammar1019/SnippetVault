const Snippet = require('../models/Snippet');

exports.getAllSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find();
        res.json(snippets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSnippetById = async (req, res) => {
    try {
        const snippet = await Snippet.findById(req.params.id);
        if (!snippet) return res.status(404).json({ message: 'Snippet not found' });
        res.json(snippet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSnippet = async (req, res) => {
    const { title, description, code, language, tags } = req.body;
    const snippet = new Snippet({ title, description, code, language, tags });
    try {
        const newSnippet = await snippet.save();
        res.status(201).json(newSnippet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateSnippet = async (req, res) => {
    try {
        const snippet = await Snippet.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!snippet) return res.status(404).json({ message: 'Snippet not found' });
        res.json(snippet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteSnippet = async (req, res) => {
    try {
        const snippet = await Snippet.findByIdAndDelete(req.params.id);
        if (!snippet) return res.status(404).json({ message: 'Snippet not found' });
        res.json({ message: 'Snippet deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
