// ============== MENU NAVBAR ================
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");

menuBtn.onclick = function () {
  navlist.classList.toggle("active");
  menuBtn.classList.toggle("ri-arrow-up-double-line");
};

// ============== STICKY NAVBAR ================
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

// ============== PORTFOLIO TABS ================
let portfolioTabs = document.getElementsByClassName("portfolio-tab");
let tabContents = document.getElementsByClassName("tab-content");

function tabOpen(x) {
  for (portfolioTab of portfolioTabs) {
    portfolioTab.classList.remove("active");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(x).classList.add("active-content");
}

let currentPage = {
  all: 1,
  Assignment1: 1,
  webdesign: 1,
  appdevelop: 1,
};

const itemsPerPage = 6;

function showPage(tabId, page) {
  const tabContent = document.getElementById(tabId);
  const images = tabContent.querySelectorAll(".image");
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Hide all images
  images.forEach((image, index) => {
    image.classList.add("hidden");
    if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
      image.classList.remove("hidden");
    }
  });

  // Disable/enable buttons based on page
  const prevBtn = tabContent.querySelector(".btn__prev");
  const nextBtn = tabContent.querySelector(".btn__next");

  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;
}

function nextPage(tabId) {
  const page = currentPage[tabId];
  currentPage[tabId] = page + 1;
  showPage(tabId, currentPage[tabId]);
}

function prevPage(tabId) {
  const page = currentPage[tabId];
  currentPage[tabId] = page - 1;
  showPage(tabId, currentPage[tabId]);
}

// Initialize first page for each tab
document.addEventListener("DOMContentLoaded", () => {
  showPage("all", currentPage["all"]);
  showPage("Assignment1", currentPage["Assignment1"]);
  showPage("webdesign", currentPage["webdesign"]);
  showPage("appdevelop", currentPage["appdevelop"]);
});

// ============== DARK THEME================
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

// ============== TYPED JS ================
const typed = new Typed(".multiple-text", {
  strings: ["Fullstack Developer", "Content Creator", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ============== SCROLL REVEAL ANIMATION ================
const sr = ScrollReveal({
  distance: "200px",
  duration: 3500,
  delay: 200,
  reset: true,
});

sr.reveal(".home-container h3", { origin: "top" });
sr.reveal(".home-container h1", { origin: "left" });
sr.reveal(".home-container p", { origin: "left" });
sr.reveal(".home-container .right", { origin: "right" });
sr.reveal(".social-icons-container", { origin: "right" });
sr.reveal(".about-container .title", { origin: "right" });
sr.reveal(".about-container h3", { origin: "bottom" });
sr.reveal(".about-container p", { origin: "bottom" });
sr.reveal(".about-container .left", { origin: "left" });
sr.reveal(".about-container .right", { origin: "right" });
sr.reveal(".services .title", { origin: "top" });
sr.reveal(".services .content-1", { origin: "left" });
sr.reveal(".services .content-2", { origin: "right" });
sr.reveal(".portfolio-container", { origin: "bottom" });
sr.reveal(".portfolio .title", { origin: "top" });
sr.reveal(".portfolio-buttons", { origin: "left" });
sr.reveal(".testimonial .title", { origin: "right" });
sr.reveal(".testimonial .testimonial-container", { origin: "left" });
sr.reveal(".contact .title", { origin: "top" });
sr.reveal(".contact .row .box", { origin: "right" });
sr.reveal(".contact .row .contact-form", { origin: "left" });
