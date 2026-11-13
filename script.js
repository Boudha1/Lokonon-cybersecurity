
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navlinks");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded =
        toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const legal = document.getElementById("legal");
  const openButton = document.getElementById("legal-open");
  const closeButton = document.getElementById("legal-close");

  if (legal && openButton && closeButton) {
    openButton.addEventListener("click", () => {
      if (!legal.open) legal.showModal();
    });

    closeButton.addEventListener("click", () => {
      if (legal.open) legal.close();
    });

    legal.addEventListener("click", (event) => {
      if (event.target === legal) legal.close();
    });
  }
});
