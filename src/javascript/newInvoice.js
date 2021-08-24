let newInvoice = document.getElementById("new-invoice");
let formSection = document.getElementById("form-section");
let backButton = document.getElementById("back-button");
let main = document.getElementById("main");


newInvoice.addEventListener('click', () => {
    formSection.classList.add('active');
    main.classList.add('form-active');
});

backButton.addEventListener('click', (e) => {
    formSection.classList.remove('active');
    main.classList.remove('form-active')
});

