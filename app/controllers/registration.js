var models = require('../db');

exports.user = function(req,res){
    //var user = req.body.data
    //var user = new models.User(req.body.data);
    var user = new models.User(req.body.data)
    user.save(function(err,doc){
        console.log(err,doc);
        res.sendStatus(200)
    })
};
