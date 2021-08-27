import formElements from '../form/formElements';

formElements.save.addEventListener('click', () => {
    let allInputFields = Array.from(formElements.form.querySelectorAll('input'));
    let errors = false;
    allInputFields.forEach(item => {
        if(item.value == ''){
            errors = true;
            item.parentElement.classList.add('error')
        }else{
            item.parentElement.classList.remove('error')
        };
        item.addEventListener('change', i => {
           i.target.parentElement.classList.remove('error');
        })
    })
    if(errors){
        formElements.form.classList.add('error');
        let formSection = document.getElementById('form-section');
        formSection.scrollTop = formElements.form.scrollHeight;
    }else{
        formElements.form.classList.remove('error');
    }
});

// run validate function after save button clicked 
// check all from fields for input 
// if any fields are empty display return and display erros 