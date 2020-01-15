// The first argument "_" to our top-level resolvers, parent, is always blank because it refers to the root of our graph

// The second argument "__" refers to any arguments passed into our query, which we use in our launch query to fetch a launch by its id. 

module.exports = {
  Query: {
    launches: (_, __, { dataSources }) =>
      dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
