/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameById = /* GraphQL */ `
  query GetGameById($id: ID!) {
    getGameById(id: $id) {
      id
      host {
        id
        name
        createdAt
        updatedAt
      }
      challenger {
        id
        name
        createdAt
        updatedAt
      }
      attempts {
        id
        word
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      host {
        id
        name
        createdAt
        updatedAt
      }
      challenger {
        id
        name
        createdAt
        updatedAt
      }
      attempts {
        id
        word
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      }
      nextToken
    }
  }
`;
export const getAttempt = /* GraphQL */ `
  query GetAttempt($id: ID!) {
    getAttempt(id: $id) {
      id
      word
      status
      createdAt
      updatedAt
    }
  }
`;
export const listAttempts = /* GraphQL */ `
  query ListAttempts(
    $filter: ModelAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        word
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
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
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
