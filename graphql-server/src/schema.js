import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
      usuario(_id: ID!): Usuario
      usuarios: [Usuario!]
    }

    type Mutation {
      crearUsuario(nombre: String!, numdoc: Int!, email: String!, password: String!, tipo_usuario: String!, user_estado: String): Usuario
    }

    type Usuario {
      _id: ID!
      nombre: String!
      numdoc: Int!
      email: String!
      password: String!
      tipo_usuario: String!
      user_estado: String
  }
    `;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
