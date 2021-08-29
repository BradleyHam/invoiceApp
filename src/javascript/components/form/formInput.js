import formElements from '../form/formElements';
import { displayData } from '../../setup';
import { validate } from '../form/validation';

let inputElements = Array.from(document.querySelectorAll("#new-invoice-form input"));

formElements.save.addEventListener('click', (e) => {

    // kick out of function if validate return errors
     let errors = validate();
     if (errors){ return };
    
    e.preventDefault();

    let data = inputElements.reduce((acc, input) => {
        return {
            ...acc, 
            [input.id]: input.value
        }
    }, {});

    let { senderStreet , senderCountry, senderCity, senderPostCode, clientCity, clientCountry, clientPostCode, clientStreet, clientName, clientEmail, description} = data;
    let invoiceDue = formElements.invoiceDatePicker.innerText.replaceAll(' / ', '-');
    let termNumber = formElements.terms.innerText.match(/\d+/)[0];
    let today = formatDate(new Date());
    let invoiceStructuredData = {
        clientAddress: {
             city: clientCity,
             country: clientCountry,
             postCode: clientPostCode, 
             street: clientStreet
            },
        clientEmail: clientEmail,
        clientName: clientName,
        createdAt: today,
        description: description,
        id: generateId(),
        items: structureInvoiceItems(),
        paymentDue: invoiceDue,
        paymentTerms: +termNumber,
        senderAddress: {
             city: senderCity, 
             country: senderCountry,
             postCode: senderPostCode, 
             street: senderStreet
            },
        status: "pending"
    };
    invoiceStructuredData.total = getTotal(invoiceStructuredData.items);
    let invoices = JSON.parse(localStorage.getItem('invoices'));
    invoices.push(invoiceStructuredData);
    localStorage.setItem('invoices', JSON.stringify(invoices));
    
    formElements.invoiceList.insertAdjacentHTML('afterbegin', ` 
    <li class="invoice">
        <div class="invoice__id"><span class="text-tertiary">#</span>${invoiceStructuredData.id}</div>
        <div class="invoice__name">${invoiceStructuredData.clientName}</div>
        <div class="invoice__date">${invoiceStructuredData.createdAt}</div>
        <div class="invoice__amount">$${invoiceStructuredData.total}</div>
         <div class="invoice__status ${invoiceStructuredData.status}"><p class='${invoiceStructuredData.status}-text'>${invoiceStructuredData.status[0].toUpperCase() + invoiceStructuredData.status.slice(1).toLowerCase()}</p></div>
     </li>`);

    formElements.formSection.classList.remove('active');
    main.classList.remove('form-active');

});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const capitalAlphabet = alphabet.toUpperCase();
    return capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)];
}

function randomNumber(){
    return Math.floor(Math.random() * 10)
}

function generateId(){
    let id = [randomNumber(), randomNumber(), randomLetter(), randomLetter(), randomLetter(), randomLetter()];
    return id.join('')
}

function structureInvoiceItems(){
    let itemArray = [];
    let items = Array.from(document.querySelectorAll('.item'));
    items.forEach(item => {
        let itemInputFields =  Array.from(item.querySelectorAll("input"));
        let structuredItem = itemInputFields.reduce((acc, item) => {
            return {
                ...acc, 
                [item.name]: item.value
            }
        }, {});
        structuredItem.price = +structuredItem.price;
        structuredItem.quantity = +structuredItem.quantity;
        structuredItem.total = (+(item.querySelector('.total').innerText.slice(1)));
        itemArray.push(structuredItem)
    })
    return itemArray;
}

function getTotal(items){
    return items.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
}