const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mySchema = require('./models/bookschema');


const app = express();

const PORT = 5000;


app.use('/graphql', graphqlHTTP({
  schema: mySchema,
  graphiql: true

}),)




app.listen(PORT, () => { 
  console.log(`Graphql Server is running on port ${PORT}`)
})
