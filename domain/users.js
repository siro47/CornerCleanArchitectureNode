/**
 * Created by siroramirez on 24/05/17.
 */
var usersDB = require('../db/users');

exports.createUser = function(userData) {
    return new Promise(function(resolve, reject) {
        if (!userData.surname ||
            !userData.lastname ||
            !userData.dni) {
            reject('Missing fields');
            return;
        }

        userData.completeName = userData.surname + userData.lastname;

        usersDB.saveUser(userData)
            .then(user => {
                resolve(user);
            })
            .catch(err => {
                reject(err);
            })
    });
};