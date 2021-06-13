const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
const decrementBtn = counter.firstElementChild;
const incrementBtn = counter.lastElementChild;

let val = 0;

decrementBtn.addEventListener('click', () => {
    val -= 1;
    value.textContent = val;
});


incrementBtn.addEventListener('click', () => {
    val += 1;
    value.textContent = val;
});
