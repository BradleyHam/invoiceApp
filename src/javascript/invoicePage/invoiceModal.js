import invoiceEls from './invoicePageEls';
const { deleteButton, currentId, deleteModal, modalOpeners, cancelModal } = invoiceEls;

deleteButton.addEventListener('click', () => {
    const invoices = JSON.parse(localStorage.getItem('invoices'));
    const updatedInvoices = invoices.filter(invoice => invoice.id !== currentId);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    window.location = window.origin;
})

modalOpeners.forEach(opener => {
    opener.addEventListener('click', () => {
        deleteModal.classList.add('active');
   })
})

cancelModal.addEventListener('click', () => {
    deleteModal.classList.remove('active')
})