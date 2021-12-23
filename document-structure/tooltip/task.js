// const links = [...document.querySelectorAll(".has-tooltip")];

// links.forEach((element) => {
// 	element.innerHTML += `<div class="tooltip">${element.getAttribute(
// 		"title"
// 	)}</div>`;

// 	element.querySelector(".tooltip").style.left = `${
// 		element.getBoundingClientRect().left
// 	}px`;

// 	element.addEventListener("click", (event) => {
// 		event.preventDefault();
// 		closeTooltips();
// 		event.target
// 			.querySelector(".tooltip")
// 			.classList.toggle("tooltip_active");
// 	});
// });

// function closeTooltips() {
// 	[...document.querySelectorAll(".tooltip")].forEach(
// 		(element => {
// 			element.classList.remove("tooltip_active");
// 		})
// 	);
// }

const links = [...document.querySelectorAll(".has-tooltip")];

links.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();

		if (
			event.target.querySelector(".tooltip") &&
			event.target
				.querySelector(".tooltip")
				.classList.contains("tooltip_active")
		) {
			return event.target.querySelector(".tooltip").remove();
		} else if (document.querySelector(".tooltip")) {
			document.querySelector(".tooltip").remove();
		}

		addTooltip(event.target);
	});
});

function addTooltip(element) {
	element.innerHTML += `<div class="tooltip tooltip_active">${element.getAttribute(
		"title"
	)}</div>`;

	element.querySelector(".tooltip").style.left = `${
		element.getBoundingClientRect().left
	}px`;
}
