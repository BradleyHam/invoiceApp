const form = document.getElementById("invoice-form");
const save = document.getElementById("save-button");
const newItem = document.getElementById("new-item");
const formSection = document.getElementById("form-section");
const invoiceList = document.getElementById('invoice__list');
const backButton = document.getElementById("back-button");
const exitButtons = document.querySelectorAll('.exit-form');

// ------- INPUT FIELDS 
let inputElements = Array.from(document.querySelectorAll(".invoice-form input"));
const senderStreet = document.getElementById("senderStreet");
const senderCity = document.getElementById("senderCity");
const senderPostCode = document.getElementById("senderPostCode");
const senderCountry = document.getElementById("senderCountry");
const clientCountry = document.getElementById("clientCountry");
const clientPostCode = document.getElementById("clientPostCode");
const clientCity = document.getElementById("clientCity");
const clientStreet = document.getElementById("clientStreet");
const invoiceDatePicker = document.getElementById("invoice-date-picker");
const terms = document.getElementById("payment-terms");
const itemList = document.getElementById("item-list");

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
    inputElements,
    exitButtons,
    clientCountry,
    clientPostCode,
    clientCity,
    clientStreet,
    itemList
}







