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