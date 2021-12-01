class DropdownList {
	constructor(dropdownName) {
		this.dropDown = document.querySelector(`${dropdownName}`);
		this.dropDownList = this.dropDown.querySelector(".dropdown__list");
		this.dropDownValue = this.dropDown.querySelector(".dropdown__value");
		this.dropDownLinks = [
			...this.dropDown.querySelectorAll(".dropdown__link"),
		];

		this.dropDownValue.addEventListener("click", () => {
			this.dropDownList.classList.contains("dropdown__list_active")
				? this.dropDownList.classList.remove("dropdown__list_active")
				: this.dropDownList.classList.toggle("dropdown__list_active");
		});

        this.dropDownLinks.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this.dropDownList.classList.remove("dropdown__list_active");
                this.dropDownValue.textContent = element.textContent;
            })
        });
	}
}

const firstDropdown = new DropdownList('.dropdown');
const secondDropdown = new DropdownList('.dropdown-two');