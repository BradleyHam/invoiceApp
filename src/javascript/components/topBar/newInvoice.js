import topBarEls from './topBarElements';
const { newInvoice, formSection } = topBarEls;


newInvoice.addEventListener('click', () => {
    formSection.classList.add('active');
    main.classList.add('form-active');
});


