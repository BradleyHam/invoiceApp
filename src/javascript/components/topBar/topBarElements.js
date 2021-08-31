const newInvoice = document.getElementById("new-invoice");
const formSection = document.getElementById("form-section");

const filterBar = document.getElementById("filter-bar");
const checkboxElements = document.querySelectorAll("input[type=checkbox]");

let filterArray = JSON.parse(localStorage.filterArray);
let invoices = JSON.parse(localStorage.getItem('invoices'));

export default {
    newInvoice,
    formSection,
    main,
    filterBar,
    checkboxElements,
    filterArray,
    invoices
}