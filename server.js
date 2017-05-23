/**
 * Created by siroramirez on 23/05/17.
 *
 * Based on SPAM Server dvicente@solidear.es on 09/06/2016
 */
'use strict';

var express = require('express');
var bodyparser = require('body-parser');

var db_tools = require('./tools/db_tools');

var app = express();


db_tools.DBConnectMongoose()
    .then(() => {
        var routes = require('./routes/routes');

        // configure app to use bodyParser()
        // this will let us get the data from a POST
        app.use(bodyparser.urlencoded({extended: true}));
        app.use(bodyparser.json({limit: '10mb'}));

        routes.assignRoutes(app);

        app.listen(3000);

        console.log('Server listening on port 3000');
    })
    .catch(err => {
        console.log('Error: ' + err)
    })