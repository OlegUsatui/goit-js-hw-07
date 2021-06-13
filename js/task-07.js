const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text.style);
text.style.display = 'block';
    
fontSizeControl.addEventListener('input', (el) => {
    const val = el.currentTarget.value;
    text.style.fontSize = `${val}px`;
});