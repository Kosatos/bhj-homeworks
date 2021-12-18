const tasksParent = document.querySelector("#tasks");
const tasksForm = document.querySelector("#tasks__form");
const tasksInput = document.querySelector("#task__input");
const tasksList = document.querySelector("#tasks__list");

tasksParent.addEventListener("click", (event) => {
	event.preventDefault();

	if (
		event.target.classList.contains("tasks__add") &&
		tasksInput.value.trim() !== ""
	) {
		tasksList.innerHTML += `<div class="task">
                <div class="task__title">${tasksInput.value.trim()}</div>
                <a href="#" class="task__remove">
                    &times;
                </a>
            </div>`;

        tasksInput.value = null;
	}

	if (event.target.classList.contains("task__remove")) {
		event.target.closest(".task").remove();
	}
});
