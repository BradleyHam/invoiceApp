import { displayData } from '../../setup';

let filterBar = document.getElementById("filter-bar");
var checkboxElements = document.querySelectorAll("input[type=checkbox]");

let filterArray = JSON.parse(localStorage.filterArray);
let invoices = JSON.parse(localStorage.getItem('invoices'));

filterBar.addEventListener("click", ()  => {
    filterBar.classList.toggle('active')
});

checkboxElements.forEach(item => {
    item.addEventListener("change", (e) => {
        if(e.target.checked && filterArray.indexOf(e.target.name) == -1){
            filterArray.push(e.target.name);
        }else{
            let itemIndex = filterArray.indexOf(e.target.name);
            filterArray.splice(itemIndex, 1);
        }
        localStorage.setItem("filterArray", JSON.stringify(filterArray));
        filterArray.length > 0 ? filterInvoices(e) : displayData(invoices)
        
    })
})

function filterInvoices(e){
    let filteredArray = [];
    filterArray.forEach(status => {
        filteredArray.push(...invoices.filter(invoice => invoice.status == status))
    });
    displayData(filteredArray);
}

