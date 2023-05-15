let myBtn = document.querySelector('#myBtn');
let input__list = document.querySelector('#input__list');
let input__price = document.querySelector('#input__price');
let select__category = document.querySelector('#select__category');
let list = document.querySelector('#list');

myBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let name = input__list.value;
    let prise = input__price.value;
    let category = select__category.value;
    console.log(name, prise, category);

    let newLi = document.createElement('li');
   
    list.append(newLi);
    newLi.className = 'newLi'

})