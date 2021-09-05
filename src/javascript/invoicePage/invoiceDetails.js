import invoiceEls from './invoicePageEls';
const { currentId, statusContainer, detailsContainer } = invoiceEls;

export function renderInvoice(){
  const currentObj = getCurrentObj()[0];

  const { id, description, createdAt, paymentDue, clientEmail, clientName, paymentTerms, status, total, clientAddress: {  city, country, postCode, street }, senderAddress: { city: senderCity, country: senderCountry, postCode: senderPostCode, street: senderStreet } } = currentObj;

  let detailsElements = `
  <div class="id-job">
      <p class='id'> <span class="text-tertiary">#</span>${id}</p>
      <p class="job">${description}</p>
  </div>
  <div class="invoice-page__bill-from">
    <p class='street'>${senderStreet}</p>
    <p class='city'>${senderCity}</p>
    <p class='post-code'>${senderPostCode}</p>
    <p class='country'>${senderCountry}</p>
  </div>
  <div class="dates">
  <div class="invoice-date__container">
    <p>Invoice Date</p>
    <p class="invoice-date">${createdAt}</p>
  </div>
  <div class="payment-due__container">
    <p>Payment Due</p>
    <p class="payment-due__date"> ${paymentDue}</p>
  </div>
  </div>
  <div class="bill-to__container">
  <div>
    <p>bill to</p>
    <p class="bill-to__name">${clientName}</p>
  </div>  
  <div class="invoice-page__bill-to">
    <p class='street'>${street}</p>
    <p class='city'>${city}</p>
    <p class='post-code'>${postCode}</p>
    <p class='country'>${country}</p>
  </div>
  </div>
  <div class="email-container">
  <p>Sent to</p>
  <p class='email'>${clientEmail}</p>
  </div>
  <div class="items">
  <div class="item item-description">
    <div class="item-summary__container">
      <div class="item-job">Item Name</div>
    </div>
    <div class="item-qty">QTY</div>
    <div class="item-price">Price</div>
    <div class="item-total">Total</div>
  </div>
  <div class="item">
  <div class="item-summary__container">
    <div class="item-job">Design</div>
    <div class="item-summary">1 x $200</div>
  </div>
  <div class="item-qty">3</div>
  <div class="item-price">$200</div>
  <div class="item-total">$200</div>
  </div>
  <div class="grand-total__container">
  <p>Grand Total</p>
  <div class="grand-total">${total}</div>
  </div>
  </div>`;

  detailsContainer.innerHTML = detailsElements;

  statusContainer.classList.add(currentObj.status);
  statusContainer.innerText = currentObj.status;

  function getCurrentObj(){
    const invoices = JSON.parse(localStorage.getItem('invoices'));
    return invoices.filter(obj => obj.id == currentId);
  }
}

renderInvoice()