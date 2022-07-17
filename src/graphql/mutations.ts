/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewGame = /* GraphQL */ `
  mutation CreateNewGame($input: CreateNewGameInput!) {
    createNewGame(input: $input) {
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
export const attemptWord = /* GraphQL */ `
  mutation AttemptWord($input: AttemptWordInput!) {
    attemptWord(input: $input) {
      id
      word
      status
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createAttempt = /* GraphQL */ `
  mutation CreateAttempt(
    $input: CreateAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    createAttempt(input: $input, condition: $condition) {
      id
      word
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateAttempt = /* GraphQL */ `
  mutation UpdateAttempt(
    $input: UpdateAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    updateAttempt(input: $input, condition: $condition) {
      id
      word
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteAttempt = /* GraphQL */ `
  mutation DeleteAttempt(
    $input: DeleteAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    deleteAttempt(input: $input, condition: $condition) {
      id
      word
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
