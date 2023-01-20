$(document).ready(function () {
  $(".head-window").owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    touchDrag: false,
    mouseDrag: false,
    loop: true,
    smartSpeed: 200,
    animateOut: "fadeOut",
  });
  $(".owl-carousel").owlCarousel({
    items: 2,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    touchDrag: false,
    mouseDrag: false,
    loop: true,
    smartSpeed: 200,
    animateOut: "fadeOut",
  });
  $(".footer-boxes").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 300,
    prevArrow: false,
    nextArrow: false,
  });
  $(".main-developers").slick({});
  $(".main-blog-part").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});

/* menu-bar-hidden 
btn-close
menu-hidden-btn
*/
const menuHidden = document.querySelector(".menu-bar-hidden"),
  smallMenuBar = document.querySelector(".hidden-sm-menu-bar"),
  btnClose = document.querySelector(".close"),
  smallCloseBtn = document.querySelector(".sm-close-button"),
  menuHiddenBtn = document.querySelector(".menu-hidden-btn"),
  smallMenuBarBtn = document.querySelector(".menu");

menuHiddenBtn.addEventListener("click", (e) => {
  menuHidden.classList.add("active-hidden-menu");

  btnClose.addEventListener("click", (e) => {
    menuHidden.classList.remove("active-hidden-menu");
  });
});
smallMenuBarBtn.addEventListener("click", (e) => {
  smallMenuBar.classList.add("active-hidden-menu");
  smallCloseBtn.addEventListener("click", (e) => {
    smallMenuBar.classList.remove("active-hidden-menu");
    console.log(true);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(Loader, 5000);
});

const loaderBody = document.querySelector(".loader-body"),
  boxes = document.querySelectorAll("section");

function Loader() {
  loaderBody.classList.add("active-loader");
  boxes.forEach((item) => {
    item.classList.remove("active-loader");
  });
}
