"use strict";

const espressoEl = document.getElementById("espresso");
const latteEl = document.getElementById("latte");
const boxes = document.querySelectorAll(".box");
const picList = document.querySelectorAll(".pics-div");
const openClosedList = [];
picList.forEach((closed) => openClosedList.push(0));

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

// document.querySelector("#espresso-pic").addEventListener("click", function () {
//   document.querySelector("#espresso-pic").style.transform =
//     "translate3d(500px, -100px, 0px)";

//   document.querySelector("#espresso-pic").style.transition =
//     "transform 2s ease-in-out";
// });

for (let i = 0; i < picList.length; i++) {
  picList[i].addEventListener("click", function () {
    if (openClosedList[i] === 0) {
      openClosedList[i] = 1;
      this.classList.remove("close-rightOrLeft");
      this.classList.add(`open-${i % 2 === 0 ? "right" : "left"}`);
      setTimeout(function () {
        picList[i].firstElementChild.classList.toggle("hidden");
      }, 1900);
    } else {
      openClosedList[i] = 0;
      this.classList.remove(`open-${i % 2 === 0 ? "right" : "left"}`);
      this.classList.add("close-rightOrLeft");
      setTimeout(function () {
        picList[i].firstElementChild.classList.toggle("hidden");
      }, 1900);
    }
  });
}
