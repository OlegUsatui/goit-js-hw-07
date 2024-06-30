const widget = document.querySelector('.widget');
const buttonEl = widget.querySelector('.change-color');
const colorEl = widget.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});
