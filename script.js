let myBtn = document.querySelector('#myBtn');
let input__list = document.querySelector('#input__list');
let input__price = document.querySelector('#input__price')

myBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let name = input__list.value;
    let prise = input__price.value
    console.log(name, prise)
})