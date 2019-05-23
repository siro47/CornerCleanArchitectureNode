/**
 * Created by siroramirez on 23/05/17.
 */

var db_tools = require('../tools/db_tools');
var mongoose = require('mongoose');

// database connect
var db = db_tools.DBConnectMongoose()
    .catch(err => console.log(err));

// Create a Mongoose schema
var GroupSchema = new mongoose.Schema({
    name: String,
    description: String,
    users: [mongoose.Schema.Types.ObjectId]
});

// Register the schema
var Group = mongoose.model('group', GroupSchema);

exports.Group = Group;

exports.saveGroup = async groupData => await new Group(groupData).save();
exports.getGroup = async groupId => await Group.find({_id: groupId})