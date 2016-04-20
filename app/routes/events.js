'use strict';
var events = require('../controllers/events');

module.exports = function(app) {
    var auth = require('./middlewares/auth');
    app.get('/events/list/:id', auth, events.list);
    app.get('/events/getAllUser', auth, events.getAllUser);
    app.post('/events/add', auth, events.add);
    app.post('/events/refresh/:id', auth, events.refresh);
};
