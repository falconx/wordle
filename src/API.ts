/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  gameHostId: string,
};

export type ModelGameConditionInput = {
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  gameHostId?: ModelIDInput | null,
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

export type Game = {
  __typename: "Game",
  host: Player,
  id: string,
  createdAt: string,
  updatedAt: string,
  gameHostId: string,
};

export type Player = {
  __typename: "Player",
  name: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGameInput = {
  id: string,
  gameHostId: string,
};

export type DeleteGameInput = {
  id: string,
};

export type CreatePlayerInput = {
  name: string,
  id?: string | null,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
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

export type UpdatePlayerInput = {
  name?: string | null,
  id: string,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelGameFilterInput = {
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
  gameHostId?: ModelIDInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelPlayerFilterInput = {
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

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    name: string,
    id: string,
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
    name: string,
    id: string,
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
    name: string,
    id: string,
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
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
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
      gameHostId: string,
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
    name: string,
    id: string,
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
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    host:  {
      __typename: "Player",
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    gameHostId: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
