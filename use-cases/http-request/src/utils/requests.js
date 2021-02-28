// const CREDENTIALS = {
//   username: '',
//   password: '',
// };
// const Authorization = `Basic ${Buffer.from(`${CREDENTIALS.username}:${CREDENTIALS.password}`).toString('base64')}`;

export default {
  todos: (id) => ({
    url: 'https://jsonplaceholder.typicode.com/todos/{ID}'.replace('{ID}', id),
    method: 'GET',
    // Authorization,
  }),
};
