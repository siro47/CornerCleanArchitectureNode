/**
 * Created by siroramirez on 23/05/17.
 */
var users = require('./users');
var groups = require('./groups');

var graphQL = require('./graphQL');

exports.assignRoutes = function (app) {
    app.post('/users', users.createUser);

    app.post('/groups', groups.createGroup);
    app.get('/groups/:groupId', groups.getGroup);

    app.post('/graphQL', graphQL.getQuery);
}