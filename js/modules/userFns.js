import { ulEl, mainUserArrState } from '../main.js';

export function render(arr) {
  // clean container
  ulEl.innerHTML = '';
  arr.forEach((uObj) => {
    const liEl = makeOneEl(uObj);
    ulEl.append(liEl);
  });
}

function makeOneEl(obj) {
  const liEl = document.createElement('li');
  const maleFemaleClass = obj.gender === 'male' ? 'male' : 'female';
  liEl.className = `userLi ${maleFemaleClass}`;
  liEl.innerHTML = `
  <span>${obj.firstName} ${obj.lastName}</span>,
  <span>${obj.gender === 'male' ? 'Vyras' : 'Moteris'}</span>
  `;
  return liEl;
}

// atrekam tik moteris
export function showOnlyFemales() {
  // console.log('showOnlyFemales ');
  // showOnlyFemales() atrinkti ir atspausinti tik moteris is mainUserArrState
  const moterysOnlyArr = mainUserArrState.filter((uObj) => uObj.gender === 'female');
  // console.log('moterysOnlyArr ===', moterysOnlyArr);
  render(moterysOnlyArr);
}

export function showAll() {
  render(mainUserArrState);
}
