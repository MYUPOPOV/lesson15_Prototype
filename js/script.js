"use strict";

// console.log("Файл script подгрузился");

// console.log(document.body);

const DomElement = function (selector, height, width, bg, fontSize, text) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.text = text;
	this.newElement;

	this.createElement = function () {
		if (this.selector[0] === ".") {
			this.newElement = document.createElement("div");
			this.newElement.classList.add(this.selector);
			this.newElement.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
			this.newElement.textContent = this.text;
			document.body.append(this.newElement);
			console.log(this.newElement);
		} else if (this.selector[0] === "#") {
			this.newElement = document.createElement("p");
			this.newElement.classList.add(this.selector);
			this.newElement.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
			this.newElement.textContent = this.text;
			document.body.append(this.newElement);
			console.log(this.newElement);
		} /* else {
			alert("Введите selector, начинающийся либо с . либо с #");
		} */
	};
};

const newDiv1 = new DomElement(".class", "100px", "100px", "green", "18px", "asdas");
newDiv1.createElement();

const newDiv2 = new DomElement("#id", "50px", "200px", "blue", "24px", "wasistdas");
newDiv2.createElement();
