import formElements from '../form/formElements';
import homeElements from '../../home/homeEls';

const { main } = homeElements;
const { backButton, formSection, exitButtons } = formElements;

backButton.addEventListener('click', exitForm);

exitButtons.forEach(button => {
    button.addEventListener('click', exitForm)
})

function exitForm(e){
    e.preventDefault()
    formSection.classList.remove('active', 'edit');
    main.classList.remove('form-active')
}