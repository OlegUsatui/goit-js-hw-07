const controls = document.getElementById('controls');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const inputEl = controls.querySelector('input');
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let itemSize = 30;

  for (let i = 0; i <= amount; i++) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${itemSize}px`;
    item.style.height = `${itemSize}px`;

    boxes.appendChild(item);

    itemSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', (e) => {
  if (Number(inputEl.value) >= 1 && Number(inputEl.value) <= 100) {
    destroyBoxes();
    createBoxes(inputEl.value);
    inputEl.value = '';
  }
});

destroyButton.addEventListener('click', (e) => {
  destroyBoxes();
});
