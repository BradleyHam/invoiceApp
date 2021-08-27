import formElements from '../form/formElements';

let inputElements = Array.from(document.querySelectorAll("#invoice-form input"));

formElements.form.addEventListener('submit', (e) => {
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
        paymentTerms: termNumber,
        senderAddress: {
             city: senderCity, 
             country: senderCountry,
             postCode: senderPostCode, 
             street: senderStreet
            }
    };
  //  let invoices = JSON.parse(localStorage.getItem('invoices'));
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
        }, {})
        itemArray.push(structuredItem)
    })
    return itemArray;
}

