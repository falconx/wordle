/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNewGameInput = {
  id?: string | null,
  hostId: string,
  challengerId: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  host: Player,
  challenger: Player,
  attemps?:  Array<Attempt > | null,
  createdAt: string,
  updatedAt: string,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type Attempt = {
  __typename: "Attempt",
  id: string,
  word: string,
  status: Array< Status >,
  createdAt: string,
  updatedAt: string,
};

export enum Status {
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT",
  INCORRECT_LOCATION = "INCORRECT_LOCATION",
  INVALID = "INVALID",
}


export type AttemptWordInput = {
  id?: string | null,
  playerId: string,
  word: string,
};

export type CreateGameInput = {
  id?: string | null,
};

export type ModelGameConditionInput = {
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateAttemptInput = {
  id?: string | null,
  word: string,
  status: Array< Status >,
};

export type ModelAttemptConditionInput = {
  word?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAttemptConditionInput | null > | null,
  or?: Array< ModelAttemptConditionInput | null > | null,
  not?: ModelAttemptConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateAttemptInput = {
  id: string,
  word?: string | null,
  status?: Array< Status > | null,
};

export type DeleteAttemptInput = {
  id: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelAttemptFilterInput = {
  id?: ModelIDInput | null,
  word?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAttemptFilterInput | null > | null,
  or?: Array< ModelAttemptFilterInput | null > | null,
  not?: ModelAttemptFilterInput | null,
};

export type ModelAttemptConnection = {
  __typename: "ModelAttemptConnection",
  items:  Array<Attempt | null >,
  nextToken?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type CreateNewGameMutationVariables = {
  input: CreateNewGameInput,
};

export type CreateNewGameMutation = {
  createNewGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type AttemptWordMutationVariables = {
  input: AttemptWordInput,
};

export type AttemptWordMutation = {
  attemptWord?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttemptMutationVariables = {
  input: CreateAttemptInput,
  condition?: ModelAttemptConditionInput | null,
};

export type CreateAttemptMutation = {
  createAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttemptMutationVariables = {
  input: UpdateAttemptInput,
  condition?: ModelAttemptConditionInput | null,
};

export type UpdateAttemptMutation = {
  updateAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttemptMutationVariables = {
  input: DeleteAttemptInput,
  condition?: ModelAttemptConditionInput | null,
};

export type DeleteAttemptMutation = {
  deleteAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameByIdQueryVariables = {
  id: string,
};

export type GetGameByIdQuery = {
  getGameById?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttemptQueryVariables = {
  id: string,
};

export type GetAttemptQuery = {
  getAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttemptsQueryVariables = {
  filter?: ModelAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttemptsQuery = {
  listAttempts?:  {
    __typename: "ModelAttemptConnection",
    items:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNewGameSubscription = {
  onCreateNewGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnAttemptWordSubscription = {
  onAttemptWord?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    host:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    challenger:  {
      __typename: "Player",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    attemps?:  Array< {
      __typename: "Attempt",
      id: string,
      word: string,
      status: Array< Status >,
      createdAt: string,
      updatedAt: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttemptSubscription = {
  onCreateAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttemptSubscription = {
  onUpdateAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttemptSubscription = {
  onDeleteAttempt?:  {
    __typename: "Attempt",
    id: string,
    word: string,
    status: Array< Status >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
