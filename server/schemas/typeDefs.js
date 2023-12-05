const typeDefs = `
  type Tech {
    _id: ID
    name: String!
  }

  type Matchup {
    _id: ID
    name: String!
  }

  type Query {
    tech: Tech!
    tech(techId: ID!): Tech
  }

  type Mutation {
    getAllTech: Tech


  }
`;

module.exports = typeDefs;
