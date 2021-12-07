class HiddenElement {
	constructor(hiddenElementClass) {
		this.hiddenElements = [
			...document.querySelectorAll(hiddenElementClass),
		];
		document.addEventListener("scroll", () => {
			this.reveal();
		});
	}

	reveal = function () {
		this.hiddenElements.forEach((element) => {
			element.getBoundingClientRect().top > 0 &&
			element.getBoundingClientRect().bottom <= window.innerHeight
				? element.classList.toggle("reveal_active")
				: (element.className = "reveal");
		});
	};
}

const hiddenElementsFirst = new HiddenElement(".reveal");
