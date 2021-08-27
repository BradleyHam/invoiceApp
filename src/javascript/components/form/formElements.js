const form = document.getElementById("new-invoice-form");
const save = document.getElementById("save-button");
const newItem = document.getElementById("new-item");


// ------- INPUT FIELDS 
const senderStreet = document.getElementById("senderStreet");
const senderCity = document.getElementById("senderCity");
const senderPostCode = document.getElementById("senderPostCode");
const senderCountry = document.getElementById("senderCountry");
const invoiceDatePicker = document.getElementById("invoice-date-picker");
const terms = document.getElementById("payment-terms");

export default {
    form, 
    save,
    senderStreet,
    senderPostCode,
    senderCity,
    senderCountry,
    invoiceDatePicker,
    terms,
    newItem
}







