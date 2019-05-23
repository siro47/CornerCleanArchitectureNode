/**
 * Created by siroramirez on 23/05/17.
 */
var groupsDomain = require('../domain/groups');

exports.getGroup = async (req, res, next) => {
    var groupId = req.params.groupId;

    try {
        let group = await groupsDomain.getGroup(groupId);
        res.send(group)
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.createGroup = async (req, res, next) => {
    var groupData = req.body;

    try {
        let group = await groupsDomain.createGroup(groupData);
        res.send(group);
    } catch (err) {
        res.status(400).send(err);
    }
}