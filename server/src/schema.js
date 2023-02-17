const { gql } = require('apollo-server');
// import { gql } from 'apollo-server-core';

const typeDefs = gql`
    type Query{
        tracksForHome: [Track!]!
    }

    "A track comment....."
    type Track{
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author{
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;