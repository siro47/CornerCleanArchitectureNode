/**
 * Created by siroramirez on 24/05/17.
 */
var assert = require('assert');
var groupsDomain = require('../domain/groups');

describe('GroupTests', function() {

    it('Try to add group with missing fields', function(done) {
        var TEST_GROUP_DATA = {
            "name": "test",
            "description": "Group for unit tests"
        }
        groupsDomain.createGroup(TEST_GROUP_DATA)
            .then(group => {
                assert(group.name == TEST_GROUP_DATA.name);
                assert(group.description == TEST_GROUP_DATA.description);
                assert(group.users.length == 1);
                done();
            })
    });

});