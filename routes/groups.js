/**
 * Created by siroramirez on 23/05/17.
 */
var groupsDB = require('../db/groups');

exports.createGroup = function (req, res, next) {
    var groupData = req.body;

    // Create a default user for the group and assign to it??

    groupsDB.saveGroup(groupData)
        .then(group => {
            res.send(group)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}