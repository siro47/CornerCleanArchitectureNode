/**
 * Created by siroramirez on 23/05/17.
 */
var groupsDomain = require('../domain/groups');

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