class Rotator {
	constructor(rotatorClass) {
		this.rotator = document.querySelector(rotatorClass);
		this.rotatorCases = [
			...this.rotator.querySelectorAll(".rotator__case"),
		];
		// this.rotatorCaseIndex = this.rotatorCases.findIndex((element) => {
		// 	element.classList.contains("rotator__case_active");
		// });
		this.rotatorCaseIndex = 0;
		this.timer = null;

		this.init();
		this.startTimer(
			parseInt(this.rotatorCases[this.rotatorCaseIndex].dataset.speed, 10)
		);
	}

	init() {
		this.subscribeListeners();
	}

	subscribeListeners() {
		this.rotatorCases.forEach((element) => {
			element.style.color = element.dataset.color;
		});
	}

	startTimer(speed) {
		this.timer = setTimeout(() => {
			if (this.rotatorCaseIndex < this.rotatorCases.length - 1) {
				this.rotatorCaseIndex++;
			} else {
				this.rotatorCaseIndex = 0;
			}
			this.rotatorCases.forEach((element) => {
				element.className = "rotator__case";
			});
			this.rotatorCases[this.rotatorCaseIndex].classList.toggle(
				"rotator__case_active"
			);

			clearTimeout(this.timer);
			this.startTimer(
				parseInt(
					this.rotatorCases[this.rotatorCaseIndex].dataset.speed,
					10
				)
			);
		}, speed);
	}
}

const rotatorFirst = new Rotator(".rotator");
