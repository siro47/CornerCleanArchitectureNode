/**
 * Created by siroramirez on 24/05/17.
 */
var usersDomain = require('./users');
var groupsDB = require('../db/groups');
var usersDB = require('../db/users');

exports.getGroup = async groupId => await groupsDB.getGroup(groupId);
exports.getUsers = async group => await usersDB.getUsersByIds(group.users);

exports.createGroup = async groupData => {
    if (!groupData.name || !groupData.description) {
        return;
    }
    const defaultUser = {
        "surname": "default" + groupData.name,
        "lastname": "default",
        "dni": "default" + groupData.name
    }

    let user = await usersDomain.createUser(defaultUser);

    groupData.users = [user._id];
    return await groupsDB.saveGroup(groupData);
}