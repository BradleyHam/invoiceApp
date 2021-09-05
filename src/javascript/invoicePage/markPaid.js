import invoiceEls from './invoicePageEls';
import { renderInvoice } from './invoiceDetails';
const { currentId, statusContainer } = invoiceEls;

const markPaidButtons = document.querySelectorAll('.mark-paid');

markPaidButtons.forEach(button => {
    button.addEventListener('click', () => {
        let invoices = JSON.parse(localStorage.getItem('invoices'));
        let currentInvoice = invoices.find(item => item.id == currentId);
        currentInvoice.status = 'paid';
        localStorage.setItem('invoices', JSON.stringify(invoices));
        statusContainer.className = 'invoice__status';
        renderInvoice();
    })
})
