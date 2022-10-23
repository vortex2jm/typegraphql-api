import 'reflect-metadata'
import path from 'node:path'

import { ApolloServer } from 'apollo-server'
import { buildSchema, emitSchemaDefinitionFile } from 'type-graphql';
import { StudentResolver } from './resolvers/student-resolver';


async function bootstrap(){

  const schema = await buildSchema({
    resolvers: [
      StudentResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen();
  console.log(`Server running on ${url}`);
}

bootstrap()