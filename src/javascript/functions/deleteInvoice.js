export function deleteInvoice(id){
    const invoices = localStorage.getItem('invoices');
     return invoices.filter(invoice => {
        return invoice.id !== id; 
    });
};
