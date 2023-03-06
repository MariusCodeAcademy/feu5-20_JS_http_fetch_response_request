import { render, showOnlyFemales, showAll } from './modules/userFns.js';
console.log('main.js file was loaded');

const url = 'https://dummyjson.com/users';
// taikomens
export const ulEl = document.getElementById('app');
// nusitaikyti i input ir btn
const els = {
  femalesOnlyBtn: document.getElementById('femalesOnly'),
  allUsersBtn: document.getElementById('allUsers'),
  searchSerInput: document.getElementById('searchSerInput'),
  searchSerBtn: document.getElementById('searchSerBtn'),
};
console.log('els ===', els);
// aplikacijos globalus masyvas
export let mainUserArrState = [];
console.log('mainUserArrState ===', mainUserArrState);

// event listeners

// paspaudus searchSerBtn kvieciam searchFromServer()
els.searchSerBtn.addEventListener('click', searchFromServer);
// iskviesti femalesOnlyBtn paspaudimu showOnlyFemales()
els.femalesOnlyBtn.addEventListener('click', showOnlyFemales);
// showOnlyFemales() atrinkti ir atspausinti tik moteris is mainUserArrState
// ikviesti render(atrinka masyva) paduoti atrinkta masyva
els.allUsersBtn.addEventListener('click', showAll);

// parsiusti ir iskonsolinti visus userius
fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    // dataInJs === {users: Array(30), total: 100, skip: 0, limit: 30}
    // console.log('dataInJs ===', dataInJs);
    mainUserArrState = dataInJs.users.slice(0, 10);
    // console.log('mainUserArrState has changed ===', mainUserArrState);
    render(mainUserArrState);
  })
  .catch(console.warn);

// setTimeout(() => {
//   console.log('mainUserArrState setTimeout ===', mainUserArrState);
// }, 3000);
// console.log('mainUserArrState po fetch ===', mainUserArrState);

// parsisiusti users duomenis
// issaugoti globaliam masyve
// render() nupies usersius is gauto masyvo

// kvieciam render()

// jieskom pagal varda, atrenkam tik kas atitinka
// kviecam render()

function searchFromServer() {
  console.log('searchFromServer');
  // paimti reikmes is input searchSerInput
  const searchTerm = els.searchSerInput.value.trim();
  // console.log('searchTerm ===', searchTerm);
  // sukurti nauja fetch uzklausa kurio url turi query parametra
  const urlSearch = `https://dummyjson.com/users/search?q=${searchTerm}`;
  console.log('urlSearch ===', urlSearch);

  fetch(urlSearch)
    .then((resp) => resp.json())
    .then((dataInJs) => {
      console.log('dataInJs ===', dataInJs);
      mainUserArrState = dataInJs.users;
      render(mainUserArrState);
    })
    .catch(console.warn);
  // 'https://dummyjson.com/users/search?q=<inputo reiksme>';
  // 'https://dummyjson.com/users/search?q=jo';
  // 'https://dummyjson.com/users/search?q=mike';
  // su gautais duomenimis piesiam render()
}
