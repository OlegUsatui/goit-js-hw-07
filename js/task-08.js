const controls = document.querySelector('#controls');
const inputEl = controls.querySelector('input');
const render = inputEl.nextElementSibling;
const destroy = controls.lastElementChild;
const boxes = document.querySelector('#boxes');

render.addEventListener('click', createBoxes);
destroy.addEventListener('click', removeBoxes);


function createBoxes() {


    for (let i = 0; i < inputEl.value; i++) {
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        divEl.style.width = '30px';
        divEl.style.height = '30px';
        
        boxes.append(divEl)
    }
    inputEl.value = '';

function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}
};



function removeBoxes() {
    if (boxes.hasChildNodes) {
    boxes.removeChild(boxes.lastElementChild)     
    }
 }

