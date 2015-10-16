var bcrypt = require('bcrypt'),
    User = require('../models/user').User;

exports.addUser = function(user, cb) {
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return cb(err);
        }

        user.password = hash;

        var newUser = new User({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email.toLowerCase(),
            password: user.password
        });

        newUser.save(function(err) {
            if (err) {
                return cb(err);
            }
            cb(null);
        });
    });
};

exports.findUser = function(email, cb) {
    User.findOne({email: email.toLowerCase()}, function(err, user) {
        cb(err, user);
    });
};