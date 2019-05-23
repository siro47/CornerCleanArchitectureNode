/**
 * Created by siroramirez on 24/05/17.
 */
var usersDB = require('../db/users');

exports.createUser = async userData => {
    if (!userData.surname || !userData.lastname || !userData.dni) {
        return;
    }

    userData.completename = userData.surname + userData.lastname;

    return await usersDB.saveUser(userData)
};