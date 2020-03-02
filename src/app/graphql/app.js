const { createApolloFetch } = require('apollo-fetch');

const axios = require('axios');

const githubUrl = 'https://api.github.com/graphql'

const token = '704d23acc7931b787d813de691853755c5ba0679'

const oauth = { Authorization: 'bearer ' + token }

const queryA = '{' +
  'viewer { ' +
  'login ' +
  '}' +
  '}';

const queryB = '{' +
  'repositoryOwner (login:"anc93") { ' +
  'login ' +
  '}' +
  '}';

const queryC = '{' +
  'repositoryOwner (login:"anc93") { ' +
  'login ' +
  'repository (name: "testa") {' +
  //'nodes {' +
  'name' +
  //'}' +
  '}' +
  '}' +
  '}';


const express = require('express');

const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server running')
  axios.post(githubUrl, { query: queryC }, { headers: oauth })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (err) {
      console.log(err);
    })
})



