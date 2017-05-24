/**
 * Created by siroramirez on 23/05/17.
 */
var usersDomain = require('../domain/users');

exports.createUser = function (req, res, next) {
    var userData = req.body;

    usersDomain.createUser(userData)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}