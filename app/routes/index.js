'use strict';
var index = require('../controllers/index');

module.exports = function(app) {
    var auth = require('./middlewares/auth');
    app.get('/', index.index);
    app.post('/login', index.login);
    app.post('/signIn', auth, index.signIn);
};
