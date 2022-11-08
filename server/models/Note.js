const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    noteText: {
        required: 'Add your reflection to move on!',
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