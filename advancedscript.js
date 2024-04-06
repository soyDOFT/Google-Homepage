const key1 = document.getElementById('k1');
const key2 = document.getElementById('k2');
const key3 = document.getElementById('k3');
const searchBtn = document.getElementById('enter');

searchBtn.addEventListener('click', search)

function search(event) {
    event.preventDefault();
    const input = key1.value + '+"' + key2.value + '"+' + "-" + key3.value;
    let searchTerm = "https://www.google.com/search?q=" + input;
    window.location.assign(searchTerm);
  }