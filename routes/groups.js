/**
 * Created by siroramirez on 23/05/17.
 */
var groupsDomain = require('../domain/groups');

exports.getGroup = function (req, res, next) {
    var groupId = req.params.groupId;

    groupsDomain.getGroup(groupId)
        .then(group => {
            res.send(group)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

exports.createGroup = function (req, res, next) {
    var groupData = req.body;

    groupsDomain.createGroup(groupData)
        .then(group => {
            res.send(group)
        })
        .catch(err => {
            res.status(400).send(err);
        })
}