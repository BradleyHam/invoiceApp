const deleteButton = document.querySelector('.delete-invoice');
const currentId = window.location.search.slice(4);
const deleteModal = document.getElementById('deleteModal');
const modalOpeners = document.querySelectorAll('.delete-modal-opener');
const cancelModal = document.getElementById('deleteModal__cancel');
const statusContainer = document.querySelector('.invoice__status');
const detailsContainer = document.getElementById('detail-container');

export default {
    deleteButton,
    currentId,
    deleteModal,
    modalOpeners,
    cancelModal,
    statusContainer,
    detailsContainer
}