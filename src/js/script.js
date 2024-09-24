import { isWebp } from "./libs/webpImg.js";
isWebp();

import { slick } from "./libs/slick.min.js";

$(document).ready(function () {
    $(".carousel__inner").slick({
        speed: 300,
        //adaptiveHeight: true,
        prevArrow:
            '<button type="button" class="slick-prev slick__btn-arrow"><img src="images/icons/left-arrow.png"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick__btn-arrow"><img src="images/icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });
});

const tabsLinks = document.querySelectorAll(".catalog-item__link");

for (let i = 0; i < tabsLinks.length; i++) {
    tabsLinks[i].addEventListener("click", () => {
        const parent = tabsLinks[i].parentNode;
        const item = parent.parentNode;

        if (parent.classList.contains("catalog-item__main--active")) {
            parent.classList.toggle("catalog-item__main--active");
            item.querySelector(".catalog-item__added").classList.add(
                "catalog-item__added--active"
            );
        } else if (parent.classList.contains("catalog-item__added--active")) {
            parent.classList.toggle("catalog-item__added--active");
            item.querySelector(".catalog-item__main").classList.add(
                "catalog-item__main--active"
            );
        }
    });
}

const tabs = document.querySelectorAll(".catalog__tab");
const contents = document.querySelectorAll(".catalog-content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        document
            .querySelector(".catalog__tab--active")
            .classList.remove("catalog__tab--active");
        document
            .querySelector(".catalog-content--active")
            .classList.remove("catalog-content--active");
        tabs[i].classList.add("catalog__tab--active");
        contents[i].classList.add("catalog-content--active");
    });
}

const btns = document.querySelectorAll("[data-modal]");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        if (btns[i].getAttribute("data-modal") == "consultation") {
            document.querySelector(".overlay").style.display = "block";
            document.querySelector("#consultation").style.display = "block";
        } else if (btns[i].getAttribute("data-modal") == "order") {
            document.querySelector(".overlay").style.display = "block";
            document.querySelector("#order").style.display = "block";
        } else if (btns[i].getAttribute("data-modal") == "thanks") {
            document.querySelector(".overlay").style.display = "block";
            document.querySelector("#order").style.display = "none";
            document.querySelector("#consultation").style.display = "none";
            document.querySelector("#thanks").style.display = "block";
        }
    });
}

const closeBtns = document.querySelectorAll(".modal__close");

for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", () => {
        closeBtns[i].parentNode.parentNode.style.display = "none";
        closeBtns[i].parentNode.style.display = "none";
    });
}

// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);

// import {blurElements} from "./libs/blurElements.js";
// blurElements();

// import {isMobile} from "./libs/isMobile.js";
// if (isMobile.any()) {
//     document.body.classList.add('_mobile');
// } else {
//     document.body.classList.add('_pc');
// }

//import {pagination} from "./libs/pagination.js";
//pagination(list, item, itemCount);

//import Swiper, { Navigation, Pagination } from 'swiper';
//const swiper = new Swiper();
