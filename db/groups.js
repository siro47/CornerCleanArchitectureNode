/**
 * Created by siroramirez on 23/05/17.
 */

var db_tools = require('../tools/db_tools');
var mongoose = require('mongoose');

// database connect
var db = db_tools.DBConnectMongoose()
    .catch(err => {
        console.log(err)
    });

// Create a Mongoose schema
var GroupSchema = new mongoose.Schema({
    name: String,
    description: String,
    users: [mongoose.Schema.Types.ObjectId]
});

// Register the schema
var Group = mongoose.model('group', GroupSchema);

exports.Group = Group;
exports.saveGroup = function(groupData) {
    var group = new Group(groupData);
    return new Promise(function(resolve, reject) {
        group.save()
            .then(group => {
                console.log("Group saved!");
                resolve(group);
            })
            .catch(err => {
                console.log("Error saving group: " + err);
                reject(err);
            })
    })
}

exports.getGroup = function (groupId) {
    return new Promise(function(resolve, reject) {
        Group.findOne({_id: groupId})
            .then(group => {
                resolve(group);
            })
            .catch(err => {
                console.log("Error retrieving groups: " + err);
                reject(err);
            })
    })
}