const modal = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close_times");

if(document.cookie.replace(/(?:(?:^|.*;\s*)close\s*\=\s*([^;]*).*$)|^.*$/, '$1') !== 'true') {
    modal.classList.add('modal_active');
}

closeButton.addEventListener("click", () => {
	modal.classList.remove("modal_active");
	document.cookie = "close=true";
});
