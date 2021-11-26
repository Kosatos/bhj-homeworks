const modal = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const closeButtons = document.querySelectorAll(".modal__close_times");
const showSuccessButton = document.querySelector(".show-success");

const openModal = (element) => {
    element.className = "modal modal_active";
}
const closeModal = (element) => {
    element.className = "modal";
}

openModal(modal);

closeButtons.forEach((element) => {
	element.onclick = () => {
		modal.className === 'modal modal_active' ? closeModal(modal) : closeModal(modalSuccess);
    }
});
showSuccessButton.onclick = () => {
    closeModal(modal);
    openModal(modalSuccess);
}
