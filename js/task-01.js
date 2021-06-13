const categoris = document.querySelector('#categories');
const titleEl = categoris.querySelectorAll('.item')



const allElement = categoris.children;
console.log(`В списке ${allElement.length} категории.`)

const elements = titleEl[0];
const item = elements.querySelectorAll('li')
const title = elements.firstElementChild;
console.log(`Категория: ${title.textContent}`)
console.log(`Количество елементов: ${ item.length }`)