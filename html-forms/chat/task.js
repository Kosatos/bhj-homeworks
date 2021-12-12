class Chat {
	constructor(chatWidgetClass) {
		this.chatWidget = document.querySelector(chatWidgetClass);
		this.messages = this.chatWidget.querySelector(".chat-widget__messages");
		this.messagesInput = this.chatWidget.querySelector(
			".chat-widget__input"
		);
		this.roboMessages = [
			"В чем дело?",
			"Привет",
			"Вам стоит уйти",
			"А жаренных гвоздей не хочешь?",
			"Зима близко!",
			"Нельзя так просто взять и написать в этот чат..",
			"Я твой отец!",
			"Нам не о чем больше разговаривать",
			"Раунд!",
			"Хорошо там, где Вас нет",
		];
		this.intervalId = null;

		this.chatWidget.addEventListener("click", () => {
			this.chatWidget.classList.add("chat-widget_active");
		});

		this.startTimer();

		this.messagesInput.addEventListener("keydown", (event) => {
			let randomIndex = Math.round(
				Math.random() * (this.roboMessages.length - 1)
			);
			if (event.keyCode === 13 && event.target.value.trim() !== "") {
				this.pushMessage(event.target.value.trim(), "message_client");
				this.pushMessage(this.roboMessages[randomIndex]);

				this.clearForm(event.target);

				clearInterval(this.intervalId);
				this.startTimer();
			}
		});
	}

	pushMessage = (messageText, messageClass = "") => {
		const messageTime = `${new Date().getHours()} : ${new Date().getMinutes()}`;
		this.messages.innerHTML += `
            <div class="message ${messageClass}">
                <div class="message__time">${messageTime}</div>
                <div class="message__text">
                ${messageText}
                </div>
            </div>
        `;

		this.messages.lastElementChild.scrollIntoView({
			behavior: "smooth",
		});
	};

	clearForm = (input) => {
		input.value = "";
	};

	startTimer = () => {
		this.intervalId = setInterval(() => {
			this.chatWidget.classList.contains('chat-widget_active') ? this.pushMessage(this.roboMessages[0]) : clearInterval(this.intervalId)
		}, 30000);
	};
}

const chatHelper = new Chat(".chat-widget");
