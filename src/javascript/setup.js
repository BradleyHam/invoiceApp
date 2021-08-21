localStorage.setItem("filterArray", '[]');

let invoiceList = document.getElementById('invoice__list');

function dataController(){
    if(localStorage.invoices){
        let data = JSON.parse(localStorage.getItem('invoices'));
        displayData(data)
    }else{
        let dataPromise = fetch("https://invoiceapp-6b326-default-rtdb.firebaseio.com/.json");
        dataPromise
        .then(response => response.json())
        .then(data => {
            displayData(data);
            localStorage.setItem('invoices', JSON.stringify(data));
        })
        .catch(() => console.log('something went wrong'))
    }
}

function displayData(data){
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

dataController();
