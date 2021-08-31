import formElements from '../form/formElements';
import homeElements from '../../home/homeEls';

const { main } = homeElements;
const { backButton, formSection } = formElements;

backButton.addEventListener('click', (e) => {
    formSection.classList.remove('active');
    main.classList.remove('form-active')
});