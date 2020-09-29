import "./scss/main.scss"

const button = document.getElementById("toggle-button")
const menu = document.getElementById("menu")
button.addEventListener("click", () => {
	if (button.classList.contains("active")) {
		button.classList.remove("active")
		menu.classList.remove("active")
		return
	}
	button.classList.add("active")
	menu.classList.add("active")
})

const clear = (tabsItems, list) => {
	tabsItems.map((tab, index) => {
		tab.classList.remove("features__button_active")
		list[index].classList.remove("features__item_visible")
	})
}

const tabs = () => {
	const tabs = document.getElementById("tabs").children
	const list = document.getElementById("list").children
	const tabsItems = Array.prototype.slice.call(tabs, 0)

	tabsItems.map((tab, index) => {
		tab.addEventListener("click", function () {
			clear(tabsItems, list)
			this.classList.add("features__button_active")
			list[index].classList.add("features__item_visible")
		})
	})
}

tabs()