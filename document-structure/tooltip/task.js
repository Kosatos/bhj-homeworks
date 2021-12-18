const links = [...document.querySelectorAll(".has-tooltip")];

links.forEach((element) => {
	element.innerHTML += `<div class="tooltip">${element.getAttribute(
		"title"
	)}</div>`;

	element.querySelector(".tooltip").style.left = `${
		element.getBoundingClientRect().left
	}px`;

	element.addEventListener("click", (event) => {
		event.preventDefault();
		closeTooltips();
		event.target
			.querySelector(".tooltip")
			.classList.toggle("tooltip_active");
	});
});

function closeTooltips() {
	[...document.querySelectorAll(".tooltip")].forEach(
		(element => {
			element.classList.remove("tooltip_active");
		})
	);
}
