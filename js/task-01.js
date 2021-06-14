const categoris = document.querySelector('#categories');
const titleEl = categoris.querySelectorAll('.item')



const allElement = categoris.children;
console.log(`В списке ${allElement.length} категории.`)

for (let i = 0; i < titleEl.length; i++){

    const elements = titleEl[i];
const item = elements.querySelectorAll('li')
const title = elements.firstElementChild;
console.log(`Категория: ${title.textContent}`)
console.log(`Количество елементов: ${item.length}`)   
}
