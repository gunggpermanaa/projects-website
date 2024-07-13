let search = document.querySelector(".search-box");
let cart = document.querySelector(".cart");
let user = document.querySelector(".user");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
};

document.querySelector("#cart-icon").onclick = () => {
  cart.classList.toggle("active");
  search.classList.remove("active");
  user.classList.remove("active");
};

document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
};

document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
};

// Navbar Scrool
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
  header.classList.toggle('shadow',window.scrollY > 0);
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
