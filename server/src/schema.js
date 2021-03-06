const { gql } = require('apollo-server');

const typeDefs =  gql`
type Query {
    tracksForHome: [Track!]!
}

type Author {
    id: ID!
    name: String!
    photo: String
}

type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}
`;

module.exports = typeDefs;