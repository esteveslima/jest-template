/* eslint-disable import/first */

// Import and mock resources used by SUT
import axios from 'axios';
import requests from '../../src/utils/requests';

jest.mock('axios');

// Import mocks(parameters, returns and implementations)
import { sutMock, axiosMock } from '../__mocks__/src/index.mock';

// Import SUT
import { func as sut } from '../../src/index';

describe('HTTP request - index', () => {
  beforeAll(() => { });
  beforeEach(() => { jest.resetAllMocks(); });
  afterEach(() => { });
  afterAll(() => { jest.restoreAllMocks(); });

  // Describing individual code parts behavior in function
  describe('axios request', () => {
    it('expect request to be called with function\'s given parameters', async () => {
      // Mocking external resources to match the test case before running the code
      const axiosSpy = jest.spyOn(axios, 'default').mockReturnValue(axiosMock.RESULT.OK);
      const params = sutMock.PARAMETERS.OK;

      // Running SUT code with mocked resources to test it's results/execution
      await sut(params);

      // Assert expectations to match test case
      const axiosConfig = {
        url: requests.todos.url.replace('{ID}', params.id),
        method: requests.todos.method,
        headers: {
          headerParam: params.headerParam,
        },
        data: {
          bodyParam: params.bodyParam,
        },
      };
      expect(axiosSpy).toBeCalledWith(axiosConfig);
    });

    it('expect request to be called with function\'s default parameters if none is given', async () => {
      // Mocking external resources to match the test case before running the code
      const axiosSpy = jest.spyOn(axios, 'default').mockReturnValue(axiosMock.RESULT.OK);

      // Running SUT code with mocked resources to test it's results/execution
      await sut();

      // Assert expectations to match test case
      const params = sutMock.PARAMETERS.DEFAULT;
      const axiosConfig = {
        url: requests.todos.url.replace('{ID}', params.id),
        method: requests.todos.method,
        headers: {
          headerParam: params.headerParam,
        },
        data: {
          bodyParam: params.bodyParam,
        },
      };
      expect(axiosSpy).toBeCalledWith(axiosConfig);
    });

    it('expect to throw if request fails', async () => {
      // Mocking external resources to match the test case before running the code
      jest.spyOn(axios, 'default').mockImplementation(axiosMock.RESULT.ERROR);
      const params = sutMock.PARAMETERS.OK;

      // Running SUT code with mocked resources to test it's results/execution...
      // ... And assert expectations to match test case(promise throw error)
      await expect(sut(params)).rejects.toThrow();
    });
  });

  // Describing code general behavior
  describe('general behavior', () => {
    it('expect to return request result data if everything went right', async () => {
      // Mocking external resources to match the test case before running the code
      const axiosSpy = jest.spyOn(axios, 'default').mockReturnValue(axiosMock.RESULT.OK);
      const params = sutMock.PARAMETERS.OK;

      // Running SUT code with mocked resources to test it's results/execution
      const sutResult = await sut(params);

      // Assert expectations to match test case
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      const requestResult = axiosMock.RESULT.OK;
      expect(sutResult).toEqual(requestResult.data);
    });
  });
});

// Consider using some http interceptor to mock requests automatically(e.g.: https://www.npmjs.com/package/nock)
