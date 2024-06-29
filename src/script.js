import { BASE_URL, API_KEY, options } from './js/api.js';

const form = document.getElementById('search-form');
const input = document.getElementById('input-box');
const navList = document.querySelectorAll('li');
let searchQuery = options.params.query;

navList.forEach(list => {
  list.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.active')?.classList.remove('active');
    list.classList.add('active');
    // alert('Success');
  });
});

function handleSearch(e) {
  e.preventDefault();
  searchQuery = input.value.toLowerCase().trim();
  console.log(searchQuery);
}
form.addEventListener('submit', handleSearch);
