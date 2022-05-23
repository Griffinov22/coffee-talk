"use strict";

const espressoEl = document.getElementById("espresso");
const latteEl = document.getElementById("latte");
const boxes = document.querySelectorAll(".box");

const openCloseBox = function () {
  // make the span = down-arrow
  // check if open or closed
  // take off hidden of div under it
  this.lastElementChild.textContent =
    this.lastElementChild.textContent === "^" ? "˅" : "^";

  this.nextElementSibling.classList.toggle("hidden");
};

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", openCloseBox);
}
