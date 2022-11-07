const { Schema, model } = require('mongoose');

const reflectionSchema = new Schema({
    reflectionText: {
        required: 'You need to leave a reflection!',
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      reflectionAuthor: {
        type: String,
        required: true,
        trim: true,
      },
});

const Reflection = model('Reflection', reflectionSchema);

module.exports = Reflection;