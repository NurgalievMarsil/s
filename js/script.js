'use strict';

const collections = document.querySelectorAll('.book'),
  elem = document.querySelectorAll('a'),
  spam = document.querySelector('.adv'),
  elem2 = document.querySelectorAll('li'),
  newElem = document.createElement('li');

collections[1].after(collections[0]);
collections[3].before(collections[4]);
collections[5].after(collections[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

elem[4].textContent = 'Книга 3. this и Прототипы Объектов';

spam.remove();

console.log(elem2);
elem2[3].after(elem2[6]);
elem2[4].before(elem2[8]);

elem2[47].after(elem2[55]);
elem2[55].after(elem2[49]);
elem2[49].after(elem2[50]);

elem2[25].append(newElem);
newElem.textContent = 'Глава 8: За пределами ES6';