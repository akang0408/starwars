# Lifeway Star Wars Character Search Application

This repository contains both the Next.js FE (starwars-frontend) and Nest.js API (gateway-api). Each repository has its own README.md with more information.

## Quick start

### API (gateway-api)

- Navigate to backend repo: `cd gateway-api`
- Install dependencies: `npm install`
- Start the dev server: `npm run start`

### Web App (starwars-frontend)

- Navigate to frontend repo: `cd starwars-frontend`
- Install dependencies: `yarn install`
- Start the server: `yarn run dev`
- Run Tests: `yarn test`
  
## Data Modeling (GraphQL and Dynamo DB)

- DynamoDB data schema can be found at `gateway-api/dynamodb_graphql_docs/DynamoDB_Schema.md`
- GraphQL schema for types, queries, and mutations for `People` and `Film` can be found at `gateway-api/dynamodb_graphql_docs/schema.graphql`
- An example AppSync resolver can be found at `gateway-api/dynamodb_graphql_docs/resolvers`
