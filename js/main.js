"use strict";
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cart = document.querySelector(".cart");
const container = document.querySelector(".container");

next.addEventListener("click", () => {
  const width = cart.offsetWidth;
  container.scrollLeft += width;
});
prev.addEventListener("click", () => {
  const width = cart.offsetWidth;
  container.scrollLeft -= width;
});
