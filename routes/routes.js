/**
 * Created by siroramirez on 23/05/17.
 */
var users = require('./users');

exports.assignRoutes = function (app) {
    app.post('/users', users.createUser);
}