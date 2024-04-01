const enterBtn = document.querySelector('#enter');
const searchBox = document.querySelector('#user_input');

enterBtn.addEventListener('click', search);
searchBox.addEventListener('keydown', enterSearch);

function search() {
  const input = searchBox.value;
  let searchTerm = "https://www.google.com/search?q=" + input;
  window.location.assign(searchTerm);
}

function enterSearch(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    search();
  }
}