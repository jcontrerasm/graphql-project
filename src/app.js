import { graphql } from 'graphql';
import readline from 'readline';
import { mySchema } from './schema';

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rli.question('Client Request: ', async inputQuery => {
  try {
    const result = await graphql(mySchema, inputQuery);
    console.log('Server Answer :', result.data);
    rli.close();
  } catch (error) {
    throw new Error(error);
  }
});
