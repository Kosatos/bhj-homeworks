const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState === 4) {
		pollTitle.insertAdjacentText(
			"beforeend",
			JSON.parse(xhr.responseText).data.title
		);

		console.log(JSON.parse(xhr.responseText).data.answers);

		JSON.parse(xhr.responseText).data.answers.forEach((answer) => {
			const answerButton = document.createElement("button");
			answerButton.classList.add("poll__answer");
			answerButton.insertAdjacentText("beforeend", answer);

			pollAnswers.appendChild(answerButton);
		});

		[...document.querySelectorAll(".poll__answer")].forEach((button) => {
			button.addEventListener("click", (event) => {
				event.preventDefault();
				alert("Спасибо, ваш голос засчитан!");
			});
		});
	}
});
