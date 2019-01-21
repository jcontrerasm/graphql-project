import fs from 'fs';
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const appendLine = (path, line) => {
  return fs.appendFileSync(path, line);
};

export const mutationType = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addQuote: {
      type: GraphQLString,
      args: {
        body: { type: GraphQLString }
      },
      resolve: (obj, args) => appendLine('src/data/message.txt', args.body)
    }
  }
});
