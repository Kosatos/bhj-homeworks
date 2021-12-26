const form = document.getElementById("form");
const input = document.getElementById("file");
const progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(document.getElementById("form"));
	formData.append("file", input.files[0]);

	const xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

	xhr.upload.onloadstart = function (e) {
		progress.value = 0;
		progress.max = e.total;
	};

	xhr.upload.onprogress = function (e) {
		progress.value = e.loaded;
		progress.max = e.total;
	};

	xhr.upload.onload = function (e) {
		form.reset();
		progress.value = 0;
        alert('Файл загружен!')
	};

	xhr.send(formData);
});
