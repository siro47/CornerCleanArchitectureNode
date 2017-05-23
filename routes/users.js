/**
 * Created by siroramirez on 23/05/17.
 */
var usersDB = require('../db/users');

exports.createUser = function (req, res, next) {
    var userData = req.body;

    if (!userData.surname ||
        !userData.lastname ||
        !userData.dni) {
        res.status(422).send('Missing fields');
        return;
    }

    userData.completeName = userData.surname + userData.lastname;

    usersDB.saveUser(userData)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}