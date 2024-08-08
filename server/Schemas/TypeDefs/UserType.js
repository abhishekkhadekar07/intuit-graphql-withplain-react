const { default: axios } = require("axios");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;
const CompanyType = require('./CompanyType');


const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    // company: {
    //   type: CompanyType,
    //   resolve(parentvalue, args) {
    //     return axios.get(`http://localhost:3000/companies/${parentvalue.companyId}`).then((res) => res.data)
    //   }
    // }
  }),
});


module.exports = UserType;
