const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    noteText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    noteAuthor: {
        type: String,
        required: false,
        trim: true,
    },
});

const Note = model('Note', noteSchema);

module.exports = Note;