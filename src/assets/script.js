"use strict";
// -------- STICKY NAV --------------//

window.onscroll = function () {
  myFunction();
};
const header = document.querySelector(".header");

const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// --------- HAMBURGER MENU -----------//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// -----------SLIDER PRICING-----------///

let sliderContainer = document.querySelector(".carousel");
let innerSlider = document.querySelector(".slider");

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startX}px`;
});

const checkBoundary = () => {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
};
