class HiddenElement {
	constructor(hiddenElementClass) {
		this.hiddenElements = [
			...document.querySelectorAll(hiddenElementClass),
		];
		// document.addEventListener("scroll", () => {
		// 	this.reveal();
		// });
		this.init();
	}

	init() {
		subscribeListeners();
	}

	subscribeListeners() {
		document.addEventListener("scroll", () => {
			this.reveal();
		});
	}

	reveal() {
		// this.hiddenElements.forEach((element) => {
		// 	element.getBoundingClientRect().top > 0 &&
		// 	element.getBoundingClientRect().bottom <= window.innerHeight
		// 		? element.classList.toggle("reveal_active")
		// 		: (element.className = "reveal");
		// });
		this.hiddenElements.forEach((element) => {
			const { top, bottom } = element.getBoundingClientRect();
			top > 0 && bottom <= window.innerHeight
				? element.classList.toggle("reveal_active")
				: (element.className = "reveal");
		});
	}
}

const hiddenElementsFirst = new HiddenElement(".reveal");
