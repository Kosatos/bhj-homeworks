const modal = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close_times");

if(!document.cookie.includes("close=true")) {
    modal.classList.add('modal_active');
}

closeButton.addEventListener("click", () => {
	modal.classList.remove("modal_active");
	document.cookie = "close=true";
});
