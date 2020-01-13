const { gql } = require("apollo-server");

const typeDefs = gql`
  # Schema will go here
  # schema-first development and agree on a schema before you begin implementing your API.
  # scalar types (ID, String, Boolean, Int)
  # ! means required/nor null
  # []! array of the specified type, cannot be null, but it can be empty.

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
`;

module.exports = typeDefs;
