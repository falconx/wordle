# Wordle

Work in progress.


- Why do we have createGame and createNewGame mutations?
- Does CreateNewGameInput need id param?
- Understand @key, @connection https://docs.amplify.aws/cli-legacy/graphql-transformer/connection for @model relationships
- Understand @function https://docs.amplify.aws/cli-legacy/graphql-transformer/function

- Remove global public model permission in schema.graphql

## Useful AWS commands

```bash
amplify api gql-compile     # Compiles all schema.graphql files
amplify codegen             # Generates GraphQL statements and types
```

```bash
amplify push                # Update cloud resources
```

```bash
amplify serve               # Runs `amplify push`, and then executes the project's start command to test run the client-side application
```


https://github.com/aws-amplify/amplify-cli/issues/3643#issuecomment-1034238340



### Mocking

```bash
amplify mock
```

Note that [mocking AppSync subscriptions is not yet supported](https://github.com/aws-amplify/amplify-category-api/issues/122).
