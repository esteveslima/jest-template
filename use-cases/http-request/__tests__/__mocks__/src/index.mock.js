// Building mocks for test situations

import faker from 'faker';

export const sutMock = {
  PARAMETERS: {
    OK: {
      id: faker.random.number(10),
      headerParam: faker.random.uuid(),
      bodyParam: faker.random.words(),
    },
    DEFAULT: {
      id: 1,
      headerParam: '123',
      bodyParam: 'abc',
    },
  },
};

export const axiosMock = {
  RESULT: {
    OK: {
      data: {
        userId: faker.random.number(),
        id: faker.random.number(),
        title: faker.random.words(),
        completed: faker.random.boolean(),
      },
    },
    ERROR: () => { throw new Error('REQUEST ERROR'); },
  },
};
