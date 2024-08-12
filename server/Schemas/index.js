const graphql = require("graphql");
// for static list of users 
const _ = require('lodash')
const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
// const userData = require("../MOCK_DATA.json");
const UserType = require("./TypeDefs/UserType")
// const CompanyType = require('./TypeDefs/CompanyType');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios.get(`http://localhost:3000/users`)
          .then(res => res.data)
        return userData
      },
    },
    // comapany: {
    //   type: CompanyType,
    //   args: { id: { type: GraphQLInt } },
    //   resolve(parentvalue, args) {
    //     return axios.get(`http://localhost:3000/companies/${args.id}`)
    //       .then(res => res.data)
    //   }
    // },
    getUserByName: {
      type: UserType,
      args: { firstName: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(userData, { firstName: args.firstName })
      }
    },

    getUserById: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(res => res.data)
        // .then(data=>data)
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, { firstName, lastName, email, password }) {
        return axios.post(`http://localhost:3000/users`, { firstName, lastName, email, password })
          .then(res => res.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, { id }) {
        axios.delete(`http://localhost:3000/users/${id}`)
          .then((res) => res.data)
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentvalue, args) {
        return axios.patch(`http://localhost:3000/users/${args.id}`, args)
          .then((res) => res.data)
      }
    }
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
