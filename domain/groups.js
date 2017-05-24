/**
 * Created by siroramirez on 24/05/17.
 */
var usersDomain = require('./users');
var groupsDB = require('../db/groups');

exports.createGroup = function (groupData) {
    return new Promise(function(resolve, reject) {
        if (!groupData.name ||
            !groupData.description) {
            reject('Missing fields');
        }

        var defaultUser = {
            "surname": "default" + groupData.name,
            "lastname": "default",
            "dni": "default" + groupData.name
        }

        usersDomain.createUser(defaultUser)
            .then(user => {
                groupsDB.saveGroup(groupData)
                    .then(group => {
                        resolve(group);
                    })
            })
            .catch(err => {
                reject(err);
            })
    });
}