
# Description

Simple Gateway API created with Nest.js to act as a middleware layer between the starwars-front end repo and the SWAPI API.

## Data Modeling (GraphQL and Dynamo DB)

- DynamoDB data schema can be found at `dynamodb_graphql_docs/DynamoDB_Schema.md`
- GraphQL schema for types, queries, and mutations for `People` and `Film` can be found at `dynamodb_graphql_docs/schema.graphql`
- An example AppSync resolver can be found at `/dynamodb_graphql_docs/resolvers`

## Swagger

- `http://localhost:3001/api`

## Built with

- Nest.js
- Typescript

## Features

- Rest GET endpoint that takes in a search input found in the controller
- Related service method that makes an axios call the the SWAPI API
- Create Swagger Documentation
- Implemented Typescript
  
## Quick start

- Install dependencies: `npm install`
- Start the dev server: `npm run start`
- Start the dev server in watch mode: `npm run start:dev`
- Run Tests: `npm run test`
