class Book {
	constructor(bookClass) {
		this.book = document.querySelector(bookClass);
		this.colorControlContainer = this.book.querySelector(
			".book__control_color"
		);
		this.backgroundControlContainer = this.book.querySelector(
			".book__control_background"
		);

		this.fontControllers = [...this.book.querySelectorAll(".font-size")];
		this.colorControllers = [
			...this.colorControlContainer.querySelectorAll(".color"),
		];
		this.backgroundControllers = [
			...this.backgroundControlContainer.querySelectorAll(".color"),
		];

		this.init();

		// this.fontControllers.forEach((item) => {
		// 	item.addEventListener("click", (event) => {
		// 		event.preventDefault();
		// 		this.changeFont(event);
		// 	});
		// });

		// this.colorControllers.forEach((item) => {
		// 	item.addEventListener("click", (event) => {
		// 		event.preventDefault();
		// 		this.changeColor(event);
		// 	});
		// });

		// this.backgroundControllers.forEach((item) => {
		// 	item.addEventListener("click", (event) => {
		// 		event.preventDefault();
		// 		this.changeBackground(event);
		// 	});
		// });
	}

	init() {
		this.subscribeListeners();
	}

	subscribeListeners() {
		this.fontControllers.forEach((item) => {
			item.addEventListener("click", (event) => {
				event.preventDefault();
				this.changeFont(event);
			});
		});

		this.colorControllers.forEach((item) => {
			item.addEventListener("click", (event) => {
				event.preventDefault();
				this.changeColor(event);
			});
		});

		this.backgroundControllers.forEach((item) => {
			item.addEventListener("click", (event) => {
				event.preventDefault();
				this.changeBackground(event);
			});
		});
	}

	changeFont(fontController) {
		this.removeClass(this.fontControllers, "font-size_active");
		this.book.classList.remove("book_fs-small", "book_fs-big");

		if (fontController.target.classList.contains("font-size_small")) {
			fontController.target.classList.toggle("font-size_active");
			this.book.classList.toggle("book_fs-small");
		} else if (fontController.target.classList.contains("font-size_big")) {
			fontController.target.classList.toggle("font-size_active");
			this.book.classList.toggle("book_fs-big");
		} else if (fontController.target.className === "font-size") {
			fontController.target.classList.toggle("font-size_active");
		}
	};

	changeColor(colorController) {
		this.removeClass(this.colorControllers, "color_active");
		this.book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");

		if (colorController.target.classList.contains("text_color_black")) {
			colorController.target.classList.toggle("color_active");
			this.book.classList.toggle("book_color-black");
		} else if (
			colorController.target.classList.contains("text_color_gray")
		) {
			colorController.target.classList.toggle("color_active");
			this.book.classList.toggle("book_color-gray");
		} else if (
			colorController.target.classList.contains("text_color_whitesmoke")
		) {
			colorController.target.classList.toggle("color_active");
			this.book.classList.toggle("book_color-whitesmoke");
		}
	};

	changeBackground(backgroundController) {
		this.removeClass(this.backgroundControllers, "color_active");
		this.book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");

		if (backgroundController.target.classList.contains("bg_color_black")) {
			backgroundController.target.classList.toggle("color_active");
			this.book.classList.toggle("book_bg-black");
		} else if (
			backgroundController.target.classList.contains("bg_color_gray")
		) {
			backgroundController.target.classList.toggle("color_active");
			this.book.classList.toggle("book_bg-gray");
		} else if (
			backgroundController.target.classList.contains("bg_color_white")
		) {
			backgroundController.target.classList.toggle("color_active");
			this.book.classList.toggle("book_bg-white");
		}
	};

	removeClass(elementsCollection, removableСlass) {
		elementsCollection.forEach((item) => {
			item.classList.remove(removableСlass);
		});
	};
}

const bookFirst = new Book(".book");
