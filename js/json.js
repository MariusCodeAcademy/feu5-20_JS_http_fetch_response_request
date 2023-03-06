'use strict';
console.log('json.js file was loaded');

// const user1 = {
//   username: 'James',
//   town: 'London',
//   age: 45,
//   isAwesome: true,
//   movies: ['007', 'Return of Bond'],
// };

// console.log('user1 ===', user1);

// localStorage.setItem('u1', user1);

// // konvertuoti user1 i Json formata
// const user1Json = JSON.stringify(user1);
// console.log('user1Json ===', user1Json);
// console.log('user1Json typeof ===', typeof user1Json);
// localStorage.setItem('u1', user1Json);

// // konvertuoti i javascript objekta ar masyva
// const user1After = JSON.parse(user1Json);
// console.log('user1After ===', user1After);

// console.log(Boolean(user1 === user1After));
// console.log(Boolean({ a: 1 } === { a: 1 }));
// console.log(Boolean(JSON.stringify({ a: 1 }) === JSON.stringify({ a: 1 })));

const itemFromStorage = localStorage.getItem('u1');
console.log('itemFromStorage ===', JSON.parse(itemFromStorage));
