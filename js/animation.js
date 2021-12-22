const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
let isAnimationGoing = false;
let idInterval;

const startAnimation = () => {
	const object = document.querySelector(".class");
	idInterval = requestAnimationFrame(startAnimation);
	let positionX = object.style.left;
	positionX = parseInt(positionX) + 1;
	object.style.left = positionX + "px";
};

startBtn.addEventListener("click", () => {
	if (!isAnimationGoing) {
		isAnimationGoing = !isAnimationGoing;
		startAnimation();
	} else {
		isAnimationGoing = !isAnimationGoing;
		cancelAnimationFrame(idInterval);
	}
});

resetBtn.addEventListener("click", () => {
	isAnimationGoing = false;
	cancelAnimationFrame(idInterval);
	const object = document.querySelector(".class");
	object.style.left = "0px";
	object.style.top = "50px";
});
