/**
 * Created by siroramirez on 24/05/17.
 */
var usersDomain = require('./users');
var groupsDB = require('../db/groups');
var usersDB = require('../db/users');

exports.getGroup = function (groupId) {
    return new Promise(function(resolve, reject) {
        groupsDB.getGroup(groupId)
            .then(group => {
                resolve(group);
            })
            .catch(err => {
                reject(err);
            })
    });
}

exports.getUsers = function (group) {
    return new Promise(function(resolve, reject) {
        usersDB.getUsersByIds(group.users)
            .then(users => {
                resolve(users);
            })
            .catch(err => {
                reject(err);
            })
    });
}

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
                groupData.users = [user._id];
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