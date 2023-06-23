// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let panel = document.querySelector("#panel"),
	panelBtnOpen = document.querySelector("i.open"),
	panelBtnClose = document.querySelector("i.close");

panelBtnOpen.addEventListener("click", ()=> {
	panel.classList.add("active")
})

panelBtnClose.addEventListener("click", ()=> {
	panel.classList.remove("active")
})