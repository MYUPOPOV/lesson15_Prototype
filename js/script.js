"use strict";

window.addEventListener("keydown", (event) => {
	if (event.key === "ArrowUp") {
		goUp();
	}
	if (event.key === "ArrowDown") {
		goDown();
	}
	if (event.key === "ArrowLeft") {
		goLeft();
	}
	if (event.key === "ArrowRight") {
		goRight();
	}

	// console.log(event);
});

const goUp = () => {
	let positionY = newDivComplex.newElement.style.top;
	positionY = parseInt(positionY) - 10;
	newDivComplex.newElement.style.top = positionY + "px";
};

const goDown = () => {
	let positionY = newDivComplex.newElement.style.top;
	positionY = parseInt(positionY) + 10;
	newDivComplex.newElement.style.top = positionY + "px";
};

const goRight = () => {
	let positionX = newDivComplex.newElement.style.left;
	positionX = parseInt(positionX) + 10;
	newDivComplex.newElement.style.left = positionX + "px";
};

const goLeft = () => {
	let positionX = newDivComplex.newElement.style.left;
	positionX = parseInt(positionX) - 10;
	newDivComplex.newElement.style.left = positionX + "px";
};

const DomElement = function (selector, height, width, bg, fontSize, text) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.text = text;
	this.newElement;

	this.createElement = () => {
		if (this.selector[0] === ".") {
			this.newElement = document.createElement("div");
			this.newElement.classList.add(this.selector.slice(1));
			this.newElement.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
			this.newElement.style.position = "absolute";
			this.newElement.textContent = this.text;
			document.body.append(this.newElement);
			// console.log(this.newElement);
		} else if (this.selector[0] === "#") {
			this.newElement = document.createElement("p");
			this.newElement.classList.add(this.selector.slice(1));
			this.newElement.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
			this.newElement.textContent = this.text;
			document.body.append(this.newElement);
			// console.log(this.newElement);
		}
	};
};

// const newDiv1 = new DomElement(".class", "100px", "100px", "green", "18px", "asdas");
// newDiv1.createElement();

// const newDiv2 = new DomElement("#id", "50px", "200px", "blue", "24px", "was ist das");
// newDiv2.createElement();

const newDivComplex = new DomElement(".class", "100px", "100px", "MediumAquamarine", "20px", "Object");
newDivComplex.createElement();

newDivComplex.newElement.style.top = "0px";
newDivComplex.newElement.style.left = "0px";
