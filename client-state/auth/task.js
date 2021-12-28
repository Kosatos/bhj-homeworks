const signinForm = document.getElementById("signin__form");
const signinDiv = document.getElementById("signin");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

document.addEventListener("DOMContentLoaded", () => {
	if (localStorage.userId) {
		showWelcome(localStorage.userId)
	}
});

signinBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const formData = new FormData(signinForm);
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php", true);

	xhr.onload = function () {
		const loginStatus = JSON.parse(xhr.responseText).success;

		if (!loginStatus) {
			alert("Неверный логин/пароль");
		} else {
			showWelcome(JSON.parse(xhr.responseText).user_id);
			localStorage.userId = JSON.parse(xhr.responseText).user_id;
		}
	};

	xhr.send(formData);
});

function showWelcome(userIdValue) {
	signinDiv.classList.remove("signin_active");
	welcome.classList.add("welcome_active");
	userId.textContent = userIdValue;
}
