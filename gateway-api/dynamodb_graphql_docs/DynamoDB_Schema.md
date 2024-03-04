# DynamoDB Schema

## Film Table

- Added an example of what a Sort Key could be based on this data set but that would depend on use case. Adding just one secondary index per table for now.
- We can add more secondary keys depending on use case for accessing data. Flexibility/Performance vs Cost tradeoffs should be considered.
  
- Primary Key: Partition Key: `filmId` (Film ID),  Sort Key: `release_date` (String)
- Attributes:
  - `title` (String)
  - `director` (String)
  - `producer` (String)
  - `release_date` (String)
- Global Secondary Index (GSI):
  - Index Name:`title-index`
  - Partition Key: `title` (String), Sort Key: `release_date` (String)

## People Table (Characters)

- Primary Key: Partition Key: `peopleId` (People ID), Sort Key: `birth_year` (String)
- Attributes:
  - `name` (String)
  - `height` (String)
  - `mass` (String)
  - `hair_color` (String)
  - `birth_year` (String)
- Global Secondary Index (GSI):
  - Index Name: `name-index`
  - Partition Key: `name` (String), Sort Key: `birth_year` (String)
