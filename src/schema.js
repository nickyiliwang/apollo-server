const { gql } = require("apollo-server");

const typeDefs = gql`
  # Schema will go here
  # schema-first development and agree on a schema before you begin implementing your API.
  # scalar types (ID, String, Boolean, Int)
  # ! means required/nor null
  # []! array of the specified type, cannot be null, but it can be empty.
  # enum args can pass in SMALL or LARGE to missionPatch
  # launches: [Launch]! all launches

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    launches: [Launch]!
    launch(id: ID): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String #login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
