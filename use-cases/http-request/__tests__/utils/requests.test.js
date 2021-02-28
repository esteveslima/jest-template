/* eslint-disable import/first */

// Import and mock resources used by SUT
// import ...
// jest.mock('...');

// Import mocks(parameters, returns and implementations)
import { todos } from './requests.mock';

// Import SUT
import requests from '../../src/utils/requests';

describe('Requests data', () => {
  beforeAll(() => { });
  beforeEach(() => { jest.resetAllMocks(); });
  afterEach(() => { });
  afterAll(() => { jest.restoreAllMocks(); });

  it('expect to return request data adjusting with given parameters', () => {
    // Mocking external resources to match the test case before running the code
    // jest.spyOn(..., '...').mockReturnValue(...);
    const params = todos.PARAMETERS.OK.id;

    // Running SUT code with mocked resources to test it's results/execution
    const sutResult = requests.todos(params);

    // Assert expectations to match test case
    const todosRequestData = { ...requests.data.todos };
    todosRequestData.url.replace('{ID}', params);
    expect(sutResult).toEqual(todosRequestData);
  });
});

// Consider using some http interceptor to mock requests automatically(e.g.: https://www.npmjs.com/package/nock)
