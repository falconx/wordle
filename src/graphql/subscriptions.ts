/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNewGame = /* GraphQL */ `
  subscription OnCreateNewGame {
    onCreateNewGame {
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
        nextToken
      }
      createdAt
      updatedAt
      gameHostId
      gameChallengerId
    }
  }
`;
export const onAttemptWord = /* GraphQL */ `
  subscription OnAttemptWord {
    onAttemptWord {
      id
      word
      status
      createdAt
      updatedAt
      gameAttemptsId
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
        nextToken
      }
      createdAt
      updatedAt
      gameHostId
      gameChallengerId
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
        nextToken
      }
      createdAt
      updatedAt
      gameHostId
      gameChallengerId
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
        nextToken
      }
      createdAt
      updatedAt
      gameHostId
      gameChallengerId
    }
  }
`;
export const onCreateAttempt = /* GraphQL */ `
  subscription OnCreateAttempt {
    onCreateAttempt {
      id
      word
      status
      createdAt
      updatedAt
      gameAttemptsId
    }
  }
`;
export const onUpdateAttempt = /* GraphQL */ `
  subscription OnUpdateAttempt {
    onUpdateAttempt {
      id
      word
      status
      createdAt
      updatedAt
      gameAttemptsId
    }
  }
`;
export const onDeleteAttempt = /* GraphQL */ `
  subscription OnDeleteAttempt {
    onDeleteAttempt {
      id
      word
      status
      createdAt
      updatedAt
      gameAttemptsId
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
