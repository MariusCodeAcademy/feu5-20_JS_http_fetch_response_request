'use strict';
console.log('fetch.js file was loaded');

function getLocalUser() {
  fetch('/db/user.json')
    .then((resp) => resp.json())
    .then((dataInJs) => {
      console.log('dataInJs userObject from user.json ===', dataInJs);
    })
    .catch(console.warn);
}
getLocalUser();

function getLocalTextFetch() {
  fetch('/db/note.txt')
    .then((resp) => resp.text())
    .then((dataInJs) => console.log(dataInJs))
    .catch(console.warn);
}
getLocalTextFetch();

function addFooter() {
  fetch('/db/footer.html')
    .then((resp) => resp.text())
    .then((footerHtml) => {
      console.log('footerHtml ===', footerHtml);
      document.body.insertAdjacentHTML('beforeend', footerHtml);
    })
    .catch(console.warn);
}
addFooter();
