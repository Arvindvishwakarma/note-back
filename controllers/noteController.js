const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({
        title,
        content
    });
    await newNote.save();
    res.json(newNote);
};

exports.updateNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
};

exports.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:'Note Deleted'});
};