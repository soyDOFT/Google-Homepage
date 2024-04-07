let theme = 'dark mode';

const enterBtn = document.querySelector('#enter');
const imageSearchBox = document.querySelector('#image_input');
const themeBtn = document.querySelector('.advancedMenu__themeBtn');
const menuPopup = document.querySelector('#settingsMenu');
const feelingBtn = document.querySelector('#luckyButton');

enterBtn.addEventListener('click', search);
imageSearchBox.addEventListener('keydown', imageSearch);
themeBtn.addEventListener('click', themeChange);
menuPopup.addEventListener('click', popUp);
feelingBtn.addEventListener('click', randomBtn);

function search() {
  const input = imageSearchBox.value;
  let searchTerm = "https://www.google.com/search?q=" + input + "&tbm=isch";
  window.location.assign(searchTerm);
}

function imageSearch(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const input = imageSearchBox.value;
    let searchTerm = "https://www.google.com/search?q=" + input + "&tbm=isch";
    window.location.assign(searchTerm);
  }
}

function popUp() {
  const menu = document.getElementById("advancedMenu");
  let menuStatus = document.getElementById("advancedMenu").style.display;

  if (menuStatus != 'flex') {
    menu.style.display = "flex";
  } else {
    menu.style.display = 'none';
  }
}

function themeChange() {
  if (theme != 'dark mode') {
    window.location.reload();
  } else {
    //Switches necessary components to light mode
    themeBtn.innerHTML = "Dark Mode: Off";
    document.documentElement.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
    document.querySelector("main").style.backgroundColor = 'white';
    document.querySelector("footer").style.backgroundColor = 'white';
    document.querySelector("footer").style.color = 'black';
    document.querySelector("header").style.backgroundColor = 'white';
    document.querySelector("header").style.color = 'black';
    document.querySelector(".main__searchform__search").style.color = 'black';
    document.querySelector("#enter").style.backgroundColor = "#f8f9fa";
    document.querySelector("#enter").style.color = "black";
    document.querySelector("#luckyButton").style.backgroundColor = "#f8f9fa";
    document.querySelector("#luckyButton").style.color = "black";
    document.querySelector("#settingsMenu").style.color = "black";
    document.querySelector(".main__logo").src = "/img/googlelogo_color.png";
    document.querySelector("#advancedMenu").style.backgroundColor = "white";
    document.querySelector("#advancedMenu").style.color = "black";
    document.querySelector("#advancedMenu").style.boxShadow = "0px 0px 20px -10px black";
    document.getElementById("advancedMenu").style.display = 'none';

    theme = 'light mode';
  }
}

function randomBtn() {
  //a list of different adjectives
  const adj = ['Good', 'Shiny', 'Long', 'Great', 'Little', 'Old', 'Right', 'Big', 'High', 'Different', 'Small', 'Large', 'Young', 'Important', 'Artistic', 'Bad', 'Same', 'Able', 'Sad', 'Mad','Glad', 'Trendy'];
  //Generates a random number based on the size of adj and rounded down
  const random = Math.floor(Math.random() * --adj.length);

  console.log(random);
  const mood = "I'm Feeling " + adj[random];

  feelingBtn.value = mood;
  imageSearchBox.value = mood;

}