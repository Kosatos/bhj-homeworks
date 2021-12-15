const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", (event) => {
		check(event.target);
	});
});

function check(target) {
	const checkboxParent = target.closest("li");

	const ulDescendent = checkboxParent && checkboxParent.querySelector("ul");

	const childrenCheckboxes = ulDescendent && [
		...ulDescendent.querySelectorAll('input[type="checkbox"]'),
	];

	childrenCheckboxes.forEach((checkbox) => {
		if (target.checked) {
			checkbox.checked = true;
		} else {
			checkbox.checked = false;
		}
	});
}
