function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyElement = document.querySelector('body');
const changeColorElement = document.querySelector('.change-color');
const colorNameElement = document.querySelector('.color');

changeColorElement.addEventListener('click', (event) => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  colorNameElement.textContent = bodyElement.style.backgroundColor;
});