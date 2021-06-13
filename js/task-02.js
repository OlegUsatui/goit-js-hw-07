const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients')

const itemIngredients = ingredients.map(element => {
  const item = document.createElement('li')
  item.textContent = `${element}`;
  return item;
})


// const item2 = document.createElement('li')
// item2.textContent = `${ingredients[1]}`;
// const item3 = document.createElement('li')
// item3.textContent = `${ingredients[2]}`;
// const item4 = document.createElement('li')
// item4.textContent = `${ingredients[3]}`;
// const item5 = document.createElement('li')
// item5.textContent = `${ingredients[4]}`;
// const item6 = document.createElement('li')
// item6.textContent = `${ingredients[5]}`;

listIngredients.append(...itemIngredients)

