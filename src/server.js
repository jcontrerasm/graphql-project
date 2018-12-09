import dotenv from 'dotenv';
import readline from 'readline';
import assert from 'assert';
import { MongoClient } from 'mongodb';
import { graphql } from 'graphql';
import { mySchema } from './schema';

dotenv.config();

const MONGO_CONFIG = {
  url: process.env.MONGO_URL,
  parse: {
    useNewUrlParser: true
  }
}

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

MongoClient.connect(MONGO_CONFIG.url, MONGO_CONFIG.parse, (err, client) => {
  assert.equal(null, err);
  console.log('Connected to MongoDB server');
  rli.question('Client Request: ', async inputQuery => {
    try {
      const result = await graphql(mySchema, inputQuery, {}, { client });
      console.log('Server Answer :', result.data);

      client.close(() => rli.close());
    } catch (error) {
      throw new Error(error);
    }
  });
});
