import { displayData } from '../../setup';
import topBarEls from './topBarElements';

const { filterBar, checkboxElements, filterArray, invoices } = topBarEls;


filterBar.addEventListener("click", ()  => {
    filterBar.classList.toggle('active')
});

checkboxElements.forEach(item => {
    item.addEventListener("change", (e) => {
        if(e.target.checked){
            filterArray.push(e.target.name);
        }else{
            let itemIndex = filterArray.indexOf(e.target.name);
            filterArray.splice(itemIndex, 1);
        }
        localStorage.setItem("filterArray", JSON.stringify(filterArray));
        filterArray.length > 0 ? filterInvoices(e) : displayData(invoices);
    })
})
;

function filterInvoices(){
    let filteredArray = invoices.reduce((acc, invoice) => {
        filterArray.indexOf(invoice.status) !== -1 && acc.push(invoice)
        return acc;
    } , []);
    displayData(filteredArray);
}

