/**
 * Created by siroramirez on 23/05/17.
 */
'use strict'

var mongoose = require('mongoose');
var config = require('../config.json');

var db;

exports.DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        mongoose.Promise = global.Promise;

        if (db) {
            return resolve(db);
        }

        // database connect
        mongoose.connect('mongodb://' + config.db_config.host + ":" + config.db_config.port + "/" + config.db_config.name)
            .then(() => {
                db = mongoose.connection
                console.log('mongo connection created');
                resolve(db);
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject(err);
            });
    });
};