import { GraphQLSchema } from 'graphql';
import { queryType } from './queryType';
import { mutationType } from './mutationType';

export const mySchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
