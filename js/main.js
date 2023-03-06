'use strict';
console.log('main.js file was loaded');

const url = 'https://dummyjson.com/users';
// taikomens
const ulEl = document.getElementById('app');
const els = {
  femalesOnlyBtn: document.getElementById('femalesOnly'),
};

// aplikacijos globalus masyvas
let mainUserArrState = [];
console.log('mainUserArrState ===', mainUserArrState);

// event listeners
// iskviesti femalesOnlyBtn paspaudimu showOnlyFemales()
// showOnlyFemales() atrinkti ir atspausinti tik moteris is mainUserArrState
// ikviesti render(atrinka masyva) paduoti atrinkta masyva

// parsiusti ir iskonsolinti visus userius
fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    // dataInJs === {users: Array(30), total: 100, skip: 0, limit: 30}
    console.log('dataInJs ===', dataInJs);
    mainUserArrState = dataInJs.users.slice(0, 10);
    console.log('mainUserArrState has changed ===', mainUserArrState);
    render(mainUserArrState);
  })
  .catch(console.warn);

// setTimeout(() => {
//   console.log('mainUserArrState setTimeout ===', mainUserArrState);
// }, 3000);
console.log('mainUserArrState po fetch ===', mainUserArrState);

// parsisiusti users duomenis
// issaugoti globaliam masyve
// render() nupies usersius is gauto masyvo

function render(arr) {
  // clean container
  ulEl.innerHTML = '';
  arr.forEach((uObj) => {
    const liEl = makeOneEl(uObj);
    ulEl.append(liEl);
  });
}
// atrekam tik moteris
function showOnlyFemales() {
  console.log('showOnlyFemales ');
}
// kvieciam render()
// jieskom pagal varda, atrenkam tik kas atitinka
// kviecam render()

function makeOneEl(obj) {
  const liEl = document.createElement('li');
  liEl.className = 'userLi';
  liEl.innerHTML = `
  <span>${obj.firstName} ${obj.lastName}</span>,
  <span>${obj.gender === 'male' ? 'Vyras' : 'Moteris'}</span>
  `;
  return liEl;
}
