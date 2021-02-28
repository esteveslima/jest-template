// const CREDENTIALS = {
//   username: '',
//   password: '',
// };
// const Authorization = `Basic ${Buffer.from(`${CREDENTIALS.username}:${CREDENTIALS.password}`).toString('base64')}`;
const REQUESTS = {
  todos: {
    url: 'https://jsonplaceholder.typicode.com/todos/{ID}',
    method: 'GET',
    // headers: {
    //   Authorization
    // }
  },
};

export default {
  // requests basic template data
  data: REQUESTS,
  // requests builders
  todos: (id) => {
    const request = REQUESTS.todos;
    request.url.replace('{ID}', id);
    return request;
  },
};
