import topBarEls from './topBarElements';
let { inoviceAmount } = topBarEls;

inoviceAmount.innerText = JSON.parse(localStorage.getItem('invoices')).length;
