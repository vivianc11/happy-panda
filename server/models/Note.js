const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    noteText: {
        required: 'You need to leave a note!',
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      noteAuthor: {
        type: String,
        required: true,
        trim: true,
      },
});

const Note = model('Note', noteSchema);

module.exports = Note;