let myBtn = document.querySelector('#myBtn');
let input__list = document.querySelector('#input__list');
let input__price = document.querySelector('#input__price');
let select__category = document.querySelector('#select__category');
let table = document.querySelector('#table')
let tbody = document.querySelector('#tbody')

let purcashes = {};





myBtn.addEventListener('click', (evt) => {
    purcashes.name = input__list.value;
    purcashes.prise = input__price.value;
    purcashes.category = select__category.value;

    tbody.insertAdjacentHTML('beforeEnd',
        `
    <tr  class  =  "purcashes__item  purcashes__row"  data-category  = "product">
        <td  class  = "purcashes__td">  ${purcashes.name}</td>
        <td  class  = "purcashes__td">  ${purcashes.prise}</td>
        <td  class  = "purcashes__td">  ${purcashes.category}</td>
    </tr>
    `

    )
    console.log(purcashes)

})