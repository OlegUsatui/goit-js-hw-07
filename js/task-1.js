const categories = document.getElementById('categories');

const categoryItems = categories.querySelectorAll('li.item');

console.log('Number of categories', categoryItems.length);

categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;

  const list = item.querySelector('ul');
  const itemsQuantity = list.querySelectorAll('li').length;

  console.log('Category', title);
  console.log('Elements', itemsQuantity);
});


