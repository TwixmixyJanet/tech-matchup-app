const { Tech, Matchup } = require('../models');


const resolvers = {
  Query: {
    getAllTech: async () => {
      return Tech.find({});
    },
    getAllMatchups: async () => {
      return Matchup.find({});
    },
    getMatchup: async () => {
      return Matchup.find({ _id: ID });
    },
  },

  Mutation: {
    createVote: async (parent, { _id, techNum }) => {
      return await Matchup.findOneAndUpdate(
        { _id: _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
    },

    createMatchup: async (parent, { body }) => {
      return await Matchup.create(body);
    },
  },
};

module.exports = resolvers;
