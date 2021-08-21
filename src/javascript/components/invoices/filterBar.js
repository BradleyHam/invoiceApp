let invoiceList = document.getElementById('invoice__list');
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
    invoiceList.innerHTML = "";
    filteredArray.forEach(({clientEmail: email, clientName: name, total: amount, createdAt: date, id, status}) => {
        let invoice = ` 
        <li class="invoice">
            <div class="invoice__id"><span class="text-tertiary">#</span>${id}</div>
            <div class="invoice__name">${name}</div>
            <div class="invoice__date">${date}</div>
            <div class="invoice__amount">$${amount}</div>
            <div class="invoice__status ${status}"><p class='${status}-text'>${status[0].toUpperCase() + status.slice(1).toLowerCase()}</p></div>
         </li>`;
         invoiceList.innerHTML = invoiceList.innerHTML + invoice;
    })
}

function displayData(data){
    invoiceList.innerHTML = "";
    data.forEach(({clientEmail: email, clientName: name, total: amount, createdAt: date, id, status}) => {
        let invoice = ` 
        <li class="invoice">
            <div class="invoice__id"><span class="text-tertiary">#</span>${id}</div>
            <div class="invoice__name">${name}</div>
            <div class="invoice__date">${date}</div>
            <div class="invoice__amount">$${amount}</div>
            <div class="invoice__status ${status}"><p class='${status}-text'>${status[0].toUpperCase() + status.slice(1).toLowerCase()}</p></div>
         </li>`;
         invoiceList.innerHTML = invoiceList.innerHTML + invoice;
    })
}
   
