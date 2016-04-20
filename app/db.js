var mongoose = require('mongoose');

module.exports = {
    User: mongoose.model('User'),
    Event: mongoose.model('Event')
};