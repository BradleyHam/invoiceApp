let newItem = document.getElementById('new-item');
let itemList = document.getElementById('item-list');
let bin = document.querySelectorAll('.bin');

newItem.addEventListener('click', (e) => {
    e.preventDefault();
    let newItem = `  
    <div class="item item__grid-container">
    <div class="form-field item-name">
      <label for="itemName" class="item-label__name">Item name</label> <br>
      <input name="itemName"  type="text" class="text-field">
    </div>
    <div class="form-field item-qty">
      <label for="quantity" class="item-label__qty">Qty</label> <br>
      <input name="quantity"  type="text" class="text-field">
    </div>
    <div class="form-field item-price">
      <label for="price" class="item-label__price">price</label> <br>
      <input name="price" type="text" class="text-field">
    </div>
    <div class="form-field item-total">
      <label for="total" class="item-label__total">total</label> <br>
      <div class='total' class='total-number'>400</div>
    </div>
    <svg id='bin' class="bin" width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path class="delete-item" d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fill-rule="nonzero"/></svg>
    </div>`;
    itemList.insertAdjacentHTML('beforeend', newItem);
});

itemList.addEventListener('click', function(e){
    e.target.classList.contains('delete-item') && e.target.parentElement.parentElement.remove();
 });