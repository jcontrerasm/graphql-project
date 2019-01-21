import dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';
import express from 'express';
import { MongoClient } from 'mongodb';
import { mySchema } from './schema';

dotenv.config();

const app = express();
const MONGO_CONFIG = {
  url: process.env.MONGO_URL,
  parse: {
    useNewUrlParser: true,
  }
}

MongoClient.connect(MONGO_CONFIG.url, MONGO_CONFIG.parse, (err, client) => {
  console.log('Connected to MongoDB server');

  app.use('/graphql', graphqlHTTP({
    schema: mySchema,
    context: client,
    graphiql: true,
    rootValue: global
  }));

  app.listen(3000, () =>
    console.log('Running Express.js on port 3000')
  );
});
