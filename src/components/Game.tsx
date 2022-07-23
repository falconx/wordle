import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react'
import random from 'lodash/random';
import isUndefined from 'lodash/isUndefined';
import Modal from 'react-modal';
// import { API, graphqlOperation } from 'aws-amplify';
// import { Observable } from 'zen-observable-ts';

// import {
//   CreateGameMutation,
//   // OnAttemptWordSubscription,
// } from '../API';
// import * as subscriptions from '../graphql/subscriptions';
// import { createNewGame } from '../graphql/mutations';

import Box from './Box';

import words from '../words.json';

Modal.setAppElement('#__next');

const STORAGE_KEY = 'wordle';
const MAX_ATTEMPTS = 5;
const CHAR_COUNT = 5;
const SIZE = 100;

export enum Status {
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
  INCORRECT_LOCATION = 'INCORRECT_LOCATION',
  INVALID = 'INVALID',
}

const COLOURS = {
  [Status.CORRECT]: '#adffad',
  [Status.INCORRECT]: '#ddd',
  [Status.INCORRECT_LOCATION]: '#fffead',
  [Status.INVALID]: '#ffb2b2',
  disabled: '#ddd',
};

const globalStyles = css`
  body {
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }

  button {
    font: inherit;
    text-transform: uppercase;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  input {
    font: inherit;
    font-weight: normal;
  }

  label {
    display: block;
    margin-bottom: .5em;
  }

  .ReactModal__Content {
    inset: auto !important;
    border: 2px solid !important;
    border-radius: 10px !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate3d(-50%, -50%, 0) !important;
  }
`;

interface CharacterInputProps {
  status: Status;
}

const CharacterInput = styled.input<CharacterInputProps>`
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  border: 2px solid;
  outline: none;

  ${props => !isUndefined(props.status) && `
    background-color: ${COLOURS[props.status]};
  `}

  &[disabled] {
    background: ${COLOURS.disabled};
  }

  &:focus {
    border-color: blue;
  }
`;

const Input = styled.input`
  padding: .5rem;
  border: 2px solid;
  text-transform: uppercase;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem;
  border: 2px solid;
  border-radius: 10px;
  padding: 1rem 2rem;
  cursor: pointer;
  letter-spacing: .1em;
`;

// Todo: constrain allowed Input characters

const replaceAt = (string: string, index: number, replacement: string) => {
  return string.substring(0, index) + replacement + string.substring(index + replacement.length);
};

// interface KeyProps {
//   status: Status;
// }

// const Key = styled.div<KeyProps>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 40px;
//   width: 40px;
//   border: 2px solid;
//   border-radius: 10px;
//   background-color: ${props => COLOURS[props.status] || '#fff'};
// `;

// Key.propTypes = {
//   status: PropTypes.oneOf([CORRECT, INCORRECT, INCORRECT_LOCATION, INVALID]),
// };

// const keyboard = [
//   ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
//   ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
//   ['X', 'C', 'V', 'B', 'N', 'M'],
// ];

const potentialWords = (words as string[]).filter(word => word.length === CHAR_COUNT);

const getSolution = () => {
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  if (storage.solution) {
    return storage.solution;
  }

  const index = random(0, potentialWords.length, false);
  const solution = potentialWords[index];

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ solution }));

  return solution;
};

export const getWordStatus = (guess: string, solution: string): Status[] => {
  const splitSolution = Array.from(solution);
  const splitGuess = Array.from(guess);

  const solutionCharsTaken = splitSolution.map(_ => false);

  const statuses = Array.from(Array(guess.length));

  splitGuess.forEach((character, i) => {
    if (character === splitSolution[i]) {
      statuses[i] = Status.CORRECT;
      solutionCharsTaken[i] = true;
      return;
    }
  });

  return splitGuess.map((character, i) => {
    if (statuses[i]) {
      return Status.CORRECT;
    }

    if (!splitSolution.includes(character)) {
      return Status.INCORRECT;
    }

    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === character && !solutionCharsTaken[index]
    );

    if (indexOfPresentChar > -1) {
      solutionCharsTaken[indexOfPresentChar] = true;
      return Status.INCORRECT_LOCATION;
    } else {
      return Status.INCORRECT;
    }
  });
};

const Game = () => {
  const [solution, setSolution] = useState<string>();
  const [currentAttempt, setCurrentAttempt] = useState('');
  const [isInvalidWord, setIsInvalidWord] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  const [gameId, setGameId] = useState('');
  // const [isGameReady, setIsGameReady] = useState(false);
  const [isHost, setIsHost] = useState(false);

  const isCurrentAttemptComplete = currentAttempt.replace(/\s/g, '').length === CHAR_COUNT;
  const lastAttempt = attempts[attempts.length - 1];
  const isSuccess = lastAttempt === solution;

  const canSubmit =
    isCurrentAttemptComplete &&
    !isInvalidWord &&
    !isSuccess;
  
  const createGame = async () => {
    // const response = (await API.graphql({
    //   query: createNewGame,
    //   variables: {
    //     input: {
    //       hostId: 1,
    //       challengerId: 2,
    //     },
    //   },
    // }) as { data: CreateGameMutation; errors: any[] });

    // if (response.errors) {
    //   console.warn(response.errors);
    // } else {
    //   const gameId = response.data.createGame.id;
    //   console.log('new game created', gameId);
    // }
  };

  const joinGame = () => {};

  useEffect(() => {
    setSolution(getSolution());

    // subscribe to attempts
    // const initSubscriptions = async () => {
    //   // RE use of *any* type https://github.com/aws-amplify/amplify-js/issues/7589
    //   const onAttemptWordSubscription = (await API.graphql(
    //     graphqlOperation(subscriptions.onAttemptWord)
    //   )) as Observable<any>;
      
    //   onAttemptWordSubscription.subscribe({
    //     next: ({ value }) => {
    //       setAttempts((prevState) => [
    //         ...prevState,
    //         value.data.onAttempt,
    //       ]);
    //     },
    //     error: (error) => console.warn(error),
    //   });
    // };

    // initSubscriptions();

    // TODO: unsubscribe onAttemptWordSubscription
    // https://rajeshnaroth.medium.com/writing-a-react-hook-to-cancel-promises-when-a-component-unmounts-526efabf251f
  }, []);

  useEffect(() => {
    const isInvalid =
      isCurrentAttemptComplete &&
      !potentialWords.includes(currentAttempt);

    setIsInvalidWord(isInvalid);
  }, [currentAttempt]);

  useEffect(() => {
    if (!isSuccess) {
      setCurrentAttempt('');
    }
  }, [attempts]);

  // useEffect(() => {
  //   setAttempts([]);
  // }, [solution]);

  // const reset = () => {
  //   setSolution(getSolution());
  // };

  if (!solution) {
    return (
      <span>Fetching word&hellip;</span>
    );
  }

  return (
    <>
      <Global styles={globalStyles} />

      {gameId && (
        <Box
          // @ts-ignore
          position="absolute"
          top={0}
          left={0}
          p={10}
        >
          Game Id: {gameId}
          {isHost && ' (HOST)'}
        </Box>
      )}

      <Box
        // @ts-ignore
        mx="auto"
        mt={100}
        width={(SIZE * CHAR_COUNT) + (10 * (CHAR_COUNT - 1))}
      >
        <Box
          // @ts-ignore
          key={attempts}
          display="flex"
          flexDirection="column"
          gap={10}
        >
          {Array(MAX_ATTEMPTS).fill(null).map((row, rowIndex) => {
            const word = attempts?.[rowIndex];
            const wordStatus = word && getWordStatus(word, solution);

            return (
              <Box
                key={rowIndex}
                // @ts-ignore
                display="flex"
                gap={10}
              >
                {Array(CHAR_COUNT).fill(null).map((column, columnIndex) => {
                  const character = attempts?.[rowIndex]?.[columnIndex];
                  const isReadOnly = rowIndex < attempts.length;
                  const isDisabled = rowIndex > attempts.length || (rowIndex === attempts.length && isSuccess);

                  return (
                    <Box
                      key={columnIndex}
                      // @ts-ignore
                      height={SIZE}
                      width={SIZE}
                    >
                      <CharacterInput
                        type="text"
                        maxLength={1}
                        defaultValue={character}
                        readOnly={isReadOnly}
                        disabled={isDisabled}
                        status={wordStatus?.[columnIndex]}
                        onChange={event => {
                          const word = replaceAt(currentAttempt, columnIndex, event.target.value || ' ').toLowerCase();
                          setCurrentAttempt(word);
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>

        <Box
          // @ts-ignore
          display="flex"
          justifyContent="flex-end"
          gap={10}
          mt={20}
        >
          <Button
            type="button"
            onClick={createGame}
          >Create Game</Button>

          <Button
            type="button"
            onClick={() => setShowJoinModal(true)}
          >Join Game</Button>

          {/* <Button
            type="button"
            onClick={reset}
          >Reset</Button> */}

          <Button
            type="button"
            disabled={!canSubmit}
            onClick={() => {
              setAttempts(state => [
                ...state,
                currentAttempt,
              ]);
            }}
          >Submit</Button>
        </Box>

        {/* <Box mt={100}>
          <Box
            display="flex"
            gap={10}
            flexDirection="column"
          >
            {keyboard.map((keys, index) => (
              <Box
                key={index}
                display="flex"
                gap={10}
                justifyContent="center"
              >
                {keys.map(key => (
                  <Key
                    key={key}
                    status={getKeyStatus(key)}
                  >{key}</Key>
                ))}
              </Box>
            ))}
          </Box>
        </Box> */}
      </Box>

      <Modal
        isOpen={showJoinModal}
        onRequestClose={() => setShowJoinModal(false)}
      >
        <Box
          // @ts-ignore
          position="relative"
        >
          <label htmlFor="code">Enter join code: </label>

          <Input
            name="code"
            type="text"
            maxLength={10}
            value={joinCode}
            onChange={event => setJoinCode(event.target.value)}
          />

          <Box
            // @ts-ignore
            display="flex"
            gap={10}
            mt={20}
          >
            <Button
              type="button"
              onClick={joinGame}
            >Join</Button>

            <Button
              type="button"
              onClick={() => setShowJoinModal(false)}
            >Close</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Game;
