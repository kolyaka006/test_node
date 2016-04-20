'use strict';
var registration = require('../controllers/registration');

module.exports = function(app) {
    app.post('/user', registration.user);
};
