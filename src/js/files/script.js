// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// настройка высоты под устройства
function setWindowHeight() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setWindowHeight()

window.addEventListener("resize", ()=> {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
})

// горизонтальный скролл
const slider = document.querySelectorAll('.scroll-x');
let isDown = false;
let startX;
let scrollLeft;

slider.forEach(element => {
	element.addEventListener('mousedown', (e) => {
		isDown = true;
		element.classList.add('active');
		startX = e.pageX - element.offsetLeft;
		scrollLeft = element.scrollLeft;
	});
});

slider.forEach(element => {
	element.addEventListener('mouseleave', () => {
		isDown = false;
		element.classList.remove('active');
	});
});
slider.forEach(element => {
	element.addEventListener('mouseup', () => {
		isDown = false;
		element.classList.remove('active');
	});
});
slider.forEach(element => {
	element.addEventListener('mousemove', (e) => {
		if (!isDown) return; 
		e.preventDefault();
		const x = e.pageX - element.offsetLeft;
		const walk = (x - startX) * 3;
		element.scrollLeft = scrollLeft - walk;
	});
});
