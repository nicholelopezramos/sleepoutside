// get a parameter from the query string  by name 
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function renderListWithTemplate (templateFn, parentElement, list, position = 'afterbegin', clear = false) {
  if (clear){
    parentElement.innerHtml = '';
  }
}

export function renderWithTemplate (templateFn, parentElement, data, callback = 'afterbegin', clear = false) {
  if (clear){
    parentElement.innerHtml = '';
  }
  if(callback){
    callback(data);
  }
}


export async function loadTemplate(path){
  const res = await fetch(path);
  const template = await res.text();
  return template;
}


export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate('../public/partials/header.html');
  const footerTemplate = await loadTemplate('../public/partials/footer.html');

  const headerElement = document.querySelector('#main-header');
  const footerElement = document.querySelector('#main-footer');

  renderWithTemplate(headerTemplate, headerElement)
  renderWithTemplate(headerTemplate, headerElement)
}