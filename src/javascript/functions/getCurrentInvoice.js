import invoiceEls from '../invoicePage/invoicePageEls'
const { currentId } = invoiceEls

export function getCurrentInvoice(){
    const invoices = JSON.parse(localStorage.getItem('invoices'));
    return invoices.filter(obj => obj.id == currentId)[0];
  }