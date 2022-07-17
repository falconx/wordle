import { Status, getWordStatus } from './Game';

const {
  CORRECT,
  INCORRECT,
  INCORRECT_LOCATION,
} = Status;

it.todo('prevents editing previous attempts'); // ✓

it.todo('prevents editing future attempts'); // ✓

it.todo('cannot submit invalid words'); // ✓

it.todo('cannot submit without entering all characters'); // ✓

it.todo('triggers success after providing the correct word');

it.todo('triggers failure after guessing all attempts incorrectly');

// it.todo('auto focuses next input field');

// it.todo('return key performs a submit');

// it.todo('only allows letters');

// it.todo('restores attempts after reloading the page');

// it.todo('can fetch a new solution and clear attempts');

describe('highlighting', () => {
  it.todo('highlights invalid words'); // ✓

  it.todo('highlights characters in the correct location'); // ✓

  it.todo('highlights characters in the incorrect location'); // ✓

  it.todo('does not highlight incorrect characters'); // ✓

  it.todo('only applies correct location highlighting once per character found in the solution'); // ✓

  it('only applies incorrect location highlighting once per character found in the solution', () => {
    expect(getWordStatus('xx   ', 'xx___')).toEqual([CORRECT, CORRECT, INCORRECT, INCORRECT, INCORRECT]);
    expect(getWordStatus('xx   ', 'xxx__')).toEqual([CORRECT, CORRECT, INCORRECT, INCORRECT, INCORRECT]);
    expect(getWordStatus('xxx  ', 'xx___')).toEqual([CORRECT, CORRECT, INCORRECT, INCORRECT, INCORRECT]);
    expect(getWordStatus('x x  ', 'xx___')).toEqual([CORRECT, INCORRECT, INCORRECT_LOCATION, INCORRECT, INCORRECT]);
    expect(getWordStatus('xx   ', '___xx')).toEqual([INCORRECT_LOCATION, INCORRECT_LOCATION, INCORRECT, INCORRECT, INCORRECT]);
    expect(getWordStatus('x   x', '___xx')).toEqual([INCORRECT_LOCATION, INCORRECT, INCORRECT, INCORRECT, CORRECT]);
  });
});