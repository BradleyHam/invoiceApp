const form = document.getElementById("new-invoice-form");
const save = document.getElementById("save-button");
const newItem = document.getElementById("new-item");
const formSection = document.getElementById("form-section");
const invoiceList = document.getElementById('invoice__list');
const backButton = document.getElementById("back-button");

// ------- INPUT FIELDS 
let inputElements = Array.from(document.querySelectorAll("#new-invoice-form input"));
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
    newItem,
    formSection,
    invoiceList,
    backButton,
    inputElements
}







