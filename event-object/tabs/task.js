class Navigation {
	constructor(tabsId) {
		this.tabsContainer = document.querySelector(`${tabsId}`);
		this.tabs = [...this.tabsContainer.querySelectorAll(".tab")];
		this.tabsContents = [
			...this.tabsContainer.querySelectorAll(".tab__content"),
		];

		this.tabs.forEach((tab) => {
			tab.addEventListener("click", (event) => {
				this.makeActive(event);
			});
		});
	}

	makeActive = (event) => {
		this.tabs.forEach((element) => {
			element === event.target
				? element.classList.toggle("tab_active")
				: element.classList.remove("tab_active");
		});

		const activeTabId = this.tabs.indexOf(event.target);

		this.tabsContents.forEach((item) => {
			this.tabsContents.indexOf(item) !== activeTabId
				? item.classList.remove("tab__content_active")
				: item.classList.toggle("tab__content_active");
		});
	};
}

const navOne = new Navigation("#tabs1");
