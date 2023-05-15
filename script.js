let myBtn = document.querySelector('#myBtn');
let input__list = document.querySelector('#input__list');
let input__price = document.querySelector('#input__price');
let select__category = document.querySelector('#select__category');
let table = document.querySelector('#table')

myBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let name = input__list.value;
    let prise = input__price.value;
    let category = select__category.value;

    let newTr = document.createElement('tr');
    table.append(newTr);
    newTr.classList.add('newTr');

    let newTd = document.createElement('td');
    newTr.append(newTd);
    newTd.classList.add('newTd');

    newTr.textContent = `${name} ${price}`

})