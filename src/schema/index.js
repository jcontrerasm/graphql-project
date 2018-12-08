import {
  GraphQLSchema,
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

const queryType = new GraphQLObjectType({
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
      resolve: (_, args) => getRoll(args.quantity)
    }
  }
});

export const mySchema = new GraphQLSchema({
  query: queryType
});
