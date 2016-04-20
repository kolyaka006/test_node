var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    name: String,
    lastName: String,
    password: String,
    email: String
});

mongoose.model('User', UserSchema);
