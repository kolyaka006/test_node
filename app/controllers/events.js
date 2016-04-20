var models = require('../db');
var jwt    = require('jsonwebtoken');
var config = require('../config');
var socket = require('../socket');


exports.list = function(req, res){
    jwt.verify(req.headers['x-access-token'],config.secret,function(err,doc){
        if(err) throw err;
        models.Event.find({"user":doc._doc._id},function(err,event){
            if(err) throw err;
            console.log("rrrrr",req.params.id, event);
            socket.getIo().in(req.params.id).emit('list',event);
            res.sendStatus(200)
        })
    })
};

exports.getAllUser = function(req, res){
    jwt.verify(req.headers['x-access-token'],config.secret,function(err,doc){
        if(err) throw err;
        models.User.find({},{_id:1,name:1,email:1},function(err,users){
            if(err) throw err;
            res.json({
                users : users
            })
        })
    })
};

exports.add = function(req, res){
    var event = new models.Event(req.body.event);
    jwt.verify(req.headers['x-access-token'],config.secret,function(err,doc){
        if(err) throw err;
        event['user'] = doc._doc._id;
        event.save(function(err,doc){
            if (err) throw err;
            res.sendStatus(200)
        })
    })


};

exports.refresh  = function(req,res){
    models.Event.findOne({_id:req.params.id},function(err, event){
        if (err) throw err;
        event = req.body.event;
        event.save(function(err,doc){
            if (err) throw err;
            res.sendStatus(200)
        })
    })
};


