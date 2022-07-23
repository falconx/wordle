/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameById = /* GraphQL */ `
  query GetGameById($id: ID!) {
    getGameById(id: $id) {
      host {
        name
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      gameHostId
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      host {
        name
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      gameHostId
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        gameHostId
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
