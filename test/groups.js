/**
 * Created by siroramirez on 24/05/17.
 */
const assert = require('assert');
const groupsDomain = require('../domain/groups');

describe('GroupTests', () => {
    let groupId;

    it('Try to add group with missing fields', async done => {
        let TEST_GROUP_DATA = {
            "name": "test",
            "description": "Group for unit tests"
        }
        try {
            let group = await groupsDomain.createGroup(TEST_GROUP_DATA);

            assert(group.name == TEST_GROUP_DATA.name);
            assert(group.description == TEST_GROUP_DATA.description);
            assert(group.users.length == 1);

            groupId = group._id.toString();
        } catch (err) {
            assert(false)
        }
        done();
    });

    it('Retrieve existing group', async done => {
        try {
            let group = await groupsDomain.getGroup(groupId);

            assert(group != null);
            assert(group.name != null);
            assert(group.description != null);
        } catch (err) {
            assert(false)
        }
        done();
    });

});