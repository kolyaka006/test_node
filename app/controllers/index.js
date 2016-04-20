var models = require('../db');
var jwt    = require('jsonwebtoken');
var config = require('../config');

exports.index = function(req,res){
    res.render('index')
};

exports.signIn = function(req,res){
    jwt.verify(req.headers['x-access-token'],config.secret,function(err) {
        if(err) throw err;
        res.render('index');
        res.sendStatus(200);
    })
};

exports.login = function(req,res){
    models.User.findOne({name:req.body.data.username},function(err,user){
        if (err) return sendStatus(403);
        var token = jwt.sign(user, config.secret, {expiresIn: 180000});
        res.json({
            token: token,
            id:user._id
        });
    })
};

