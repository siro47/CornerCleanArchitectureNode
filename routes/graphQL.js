/**
 * Created by siroramirez on 24/05/17.
 */
var graphql = require('graphql');
var GraphQLString = require('graphql').GraphQLString;

var groupsDomain = require('../domain/groups');

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        group: {
            type: groupType,
            args: {
                id: { type: graphql.GraphQLString}
            },
            resolve: (root, {id}) => groupsDomain.getGroup(id)
        }
    })
});

const groupType = new graphql.GraphQLObjectType({
    name: 'Group',
    description: 'Type to handle groups',
    fields: () => ({
        name: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        },
        users: {
            type: new graphql.GraphQLList(usersType),
            resolve: group => groupsDomain.getUsers(group)
        }
    })
});

const usersType = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'Type to handle users',
    fields: () => ({
        completename: {
            type: graphql.GraphQLString
        }
    })
});

const apiSchema = new graphql.GraphQLSchema({
    query: queryType
});

exports.getQuery = function (req, res, next) {
    const query = `
        query Query {
          group(id: "5925676cc51a201ea7767ada") {
            name
            description
            users {
                completename
            }
          }
        }
      `;

    graphql.graphql(apiSchema, query)
        .then(result => {
            res.send(result);
        })
}