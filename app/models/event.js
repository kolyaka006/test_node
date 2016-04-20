var mongoose = require('mongoose');

var EventSchema =  mongoose.Schema({
    name: String,
    time: String,
    description: String,
    user: String,
    isPublic: Boolean,
    shared:[]
});

mongoose.model('Event', EventSchema);
