// const CREDENTIALS = {
//   username: '',
//   password: '',
// };
// const Authorization = `Basic ${Buffer.from(`${CREDENTIALS.username}:${CREDENTIALS.password}`).toString('base64')}`;

export default {
  todos: {
    url: 'https://jsonplaceholder.typicode.com/todos/{ID}',
    method: 'GET',
    // headers: {
    //   Authorization
    // }
  },
};
