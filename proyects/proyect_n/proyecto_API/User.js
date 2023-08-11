const mongoose = require('mongoose');

const User = mongoose .model('User',{
    name: {type: String, required: true, minlength: 3, trim: true},
    lastname: {type: String, required: true, minlength: 3, trim: true},
});

module.exports = User;