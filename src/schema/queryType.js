import fs from 'fs';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

const roll = () => Math.floor(6 * Math.random()) + 1;

const getRoll = (quantity) => {
  const rolls = [];
  for (let i = 0; i < quantity; i++) {
    rolls.push(roll());
  }
  return rolls;
};

const readLastLine = (path) => {
  const content = fs.readFileSync(path, 'UTF-8');
  return content.toString().trim().split('\n').slice(-1)[0];
};

export const queryType = new GraphQLObjectType({
  name: 'MainQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world with Graphql'
    },
    diceRoll: {
      type: new GraphQLList(GraphQLInt),
      args: {
        quantity: {
          type: GraphQLInt,
          defaultValue: 1
        }
      },
      resolve: (obj, args) => getRoll(args.quantity)
    },
    usersCount: {
      type: GraphQLInt,
      resolve: (obj, args, ctx) => {
        return ctx.db('test').collection('users').countDocuments();
      }
    },
    lastQuote: {
      type: GraphQLString,
      resolve: () => readLastLine('src/data/message.txt')
    },
  }
});
