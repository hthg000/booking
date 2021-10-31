import { packages, services, gallery, reviews } from "./data.js";

let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let loginBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let loginCloseBtn = document.querySelector("#form-close");
let menuBar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let imgBtn = document.querySelectorAll(".img-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  loginForm.classList.remove("active");
  menuBar.classList.remove("fa-times");
  navbar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

loginCloseBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

imgBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let activeBtn = document.querySelector(".controls .active");
    activeBtn.classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector(".img-slider").src = src;
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const packageBox = document.querySelector(".packages .row");
const serviceBox = document.querySelector(".services .row");
const galleryBox = document.querySelector(".gallery .row");
// const reviewBox = document.querySelector(".reviews .owl-carousel");

const renderPackages = packages.map((item) => {
  return `
        <div class="box">
          <img src="${item.image}" alt="${item.name}" />
          <div class="content">
            <h3><i class="fas fa-map-marker-alt"></i>${item.name}</h3>
            <p>
              ${item.desc}
            </p>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="price">$${item.discountPrice}.00 <span>$${item.price}.00</span></div>
            <a href="#" class="btn">book now</a>
          </div>
        </div>
  `;
});

const renderServices = services.map((item) => {
  return `
        <div class="box">
          <i class="fas ${item.icon}"></i>
          <h3>${item.name}</h3>
          <p>
            ${item.desc}
          </p>
        </div>
  `;
});

const renderGallery = gallery.map((item) => {
  return `
        <div class="box">
          <img src="${item.image}" alt="${item.name}" />
          <div class="content">
            <h3>${item.name}</h3>
            <p>
              ${item.desc}
            </p>
            <a href="#" class="btn">See more</a>
          </div>
        </div>
  `;
});

// const renderReviews = reviews.map((item) => {
//   return `
//         <div class="item">
//           <img src="${item.image}" alt="user01" />
//           <h3>${item.name}</h3>
//           <p>
//             ${item.text}
//           </p>
//           <div class="star">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>
//   `;
// });

packageBox.innerHTML = renderPackages.join("");
serviceBox.innerHTML = renderServices.join("");
galleryBox.innerHTML = renderGallery.join("");
// reviewBox.innerHTML = renderReviews.join("");
