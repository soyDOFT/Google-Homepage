const imageSearchBox = document.querySelector('#image_input');
imageSearchBox.addEventListener('keydown', imageSearch);

function imageSearch(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const input = imageSearchBox.value;
    let searchTerm = "https://www.google.com/search?q=" + input + "&tbm=isch";
    window.location.assign(searchTerm);
  }
}