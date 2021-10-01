// Mobile nav drawer
const navOpener = document.querySelector('.mobile-nav-opener');
navOpener.addEventListener('click', () => {
  document.querySelector("body").classList.toggle("js-drawer-open")
  navOpener.classList.toggle("is-active")
});

//Search
const searchBtn = document.querySelector('.header-nav-link-icon__search');
const searchBox = document.querySelector('.search-box');
const closeSearchBox = document.querySelector('.header-nav-link-icon--search');
searchBtn.addEventListener('click', () => {
  searchBox.classList.toggle("is-active")
});
closeSearchBox.addEventListener('click', () => {
  searchBox.classList.remove("is-active")
});