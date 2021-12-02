class Game {
	constructor(container) {
		this.container = container;
		this.wordElement = container.querySelector(".word");
		this.winsElement = container.querySelector(".status__wins");
		this.lossElement = container.querySelector(".status__loss");
		this.timeElement = container.querySelector(".status__time");

		this.timer = null;

		this.reset();

		this.startTimer();

		this.registerEvents();
	}

	startTimer = () => {
		this.wordTime = this.wordElement.children.length;
		this.timeElement.textContent = `${this.wordTime}`;

		this.timer = setInterval(() => {
			if (--this.wordTime <= 0) {
				this.fail();
				this.stopTimer(this.timer);
				this.setNewWord();
				this.startTimer();
			} else {
				this.timeElement.textContent = `${this.wordTime}`;
			}
		}, 1000);
	};

	stopTimer = (timer) => {
		clearInterval(timer);
	}

	reset() {
		this.setNewWord();
		this.winsElement.textContent = 0;
		this.lossElement.textContent = 0;
	}

	registerEvents() {
		/*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */

		document.addEventListener("keydown", (event) => {
			this.currentSymbol.textContent === event.key
				? this.success()
				: this.fail();
		});
	}

	success() {
		this.currentSymbol.classList.add("symbol_correct");
		this.currentSymbol = this.currentSymbol.nextElementSibling;
		if (this.currentSymbol !== null) {
			return;
		}

		if (++this.winsElement.textContent === 10) {
			alert("Победа!");
			this.reset();
		}
		this.setNewWord();
		this.stopTimer(this.timer);
		this.startTimer();
	}

	fail() {
		if (++this.lossElement.textContent === 5) {
			alert("Вы проиграли!");
			this.reset();
		}
		this.setNewWord();
		this.stopTimer(this.timer);
		this.startTimer();
	}

	setNewWord() {
		const word = this.getWord();

		this.renderWord(word);
	}

	getWord() {
		const words = [
				"bob",
				"awesome",
				"netology",
				"hello",
				"kitty",
				"rock",
				"youtube",
				"popcorn",
				"cinema",
				"love",
				"javascript",
			],
			index = Math.floor(Math.random() * words.length);

		return words[index];
	}

	renderWord(word) {
		const html = [...word]
			.map(
				(s, i) =>
					`<span class="symbol ${
						i === 0 ? "symbol_current" : ""
					}">${s}</span>`
			)
			.join("");
		this.wordElement.innerHTML = html;

		this.currentSymbol = this.wordElement.querySelector(".symbol_current");
	}
}

new Game(document.getElementById("game"));
