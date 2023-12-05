const typeDefs = `
  type Tech {
    _id: ID
    name: String!
  }

  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: Tech!
    tech(techId: ID!): Tech
    getAllTech: Tech
    getAllMatchups: Matchup
    getMatchup(_id: ID): Matchup
  }

  type Mutation {
    createVote(_id: ID, techNum: Int): Matchup
    createMatchup: Matchup
  }
`;

module.exports = typeDefs;
