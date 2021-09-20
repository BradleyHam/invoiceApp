
import formElements from './formElements';
import { getCurrentInvoice } from '../../functions/getCurrentInvoice';
import { listenForChangeToTotal } from './items/new-item';

let editButtons = document.querySelectorAll('.edit-button');
let { formSection, inputElements, itemList } = formElements;

editButtons.forEach( button => {
    button.addEventListener( 'click' , () => { 
        formSection.classList.add('active', 'edit');
        populateFormData();
    });
});

function populateFormData(){
    let currentInvoice = getCurrentInvoice();
    // populating all fields that have matching ids 
    inputElements.forEach(input => {
        input.innerText = 'hello'
        if([input.id] in currentInvoice){
            input.value = currentInvoice[input.id]
        }
    });
    // -------

    senderStreet.value = currentInvoice.senderAddress.street;
    senderPostCode.value = currentInvoice.senderAddress.postCode;
    senderCountry.value = currentInvoice.senderAddress.country;
    senderCity.value = currentInvoice.senderAddress.city;

    clientCity.value = currentInvoice.clientAddress.city;
    clientPostCode.value = currentInvoice.clientAddress.postCode;
    clientCountry.value = currentInvoice.clientAddress.country;
    clientStreet.value = currentInvoice.clientAddress.street;

    populateFormItems(currentInvoice)

}

function populateFormItems(currentInvoice){

    currentInvoice.items.forEach(item => {
       let itemElement = `
       <div class="item item__grid-container edit-item">
        <div class="form-field item-name">
          <label for="name" class="item-label__name">Item name</label> <br>
          <input value=${item.name} name="name" type="text" class="text-field">
        </div>
        <div class="form-field item-qty">
          <label for="quantity" class="item-label__qty">Qty</label> <br>
          <input value=${item.quantity} name="quantity"  type="number" class="text-field qty">
        </div>
        <div class="form-field item-price">
          <label for="price" class="item-label__price">price</label> <br>
          <input value=${item.price} name="price" type="number" class="text-field price">
        </div>
        <div class="form-field item-total">
          <label for="total" class="item-label__total">total</label> <br>
          <div class='total' class='total-number'>${item.total}</div>
        </div>
        <svg id='bin' class="bin" width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path class="delete-item" d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fill-rule="nonzero"/></svg>
        </div>`

        itemList.insertAdjacentHTML('afterbegin', itemElement);
    })

    let items = document.querySelectorAll('.item.item__grid-container');

    items.forEach(item => {
      console.log(item, '---')
      let qty = item.querySelector('.qty');
      let price = item.querySelector('.price');
      let total = item.querySelector('.total');
  
      [qty, price].forEach(item => {
        item.addEventListener('change', () => {
          if(qty.value < 1 || price.value < 1){
            total.innerText = '$' + 0;
          }else{
            total.innerText = '$' + (qty.value * price.value);
          }
        })
      })
    });
}

