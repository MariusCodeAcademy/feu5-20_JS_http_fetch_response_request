'use strict';
console.log('main.js file was loaded');

const url = 'https://dummyjson.com/users';

// parsiusti ir iskonsolinti visus userius
fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    // dataInJs === {users: Array(30), total: 100, skip: 0, limit: 30}
    console.log('dataInJs ===', dataInJs);
    const users = dataInJs.users;
    console.log('users ===', users);
  })
  .catch(console.warn);
