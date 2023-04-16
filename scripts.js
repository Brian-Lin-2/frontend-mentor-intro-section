// Desktop.
const features = document.querySelector(".features__dropDown");
const featuresArrow = document.querySelector(".features__arrow");
const featuresItems = document.querySelector(".features__dropDownItems");
const company = document.querySelector(".company__dropDown");
const companyArrow = document.querySelector(".company__arrow");
const companyItems = document.querySelector(".company__dropDownItems");

// Arrow state.
let featuresActive = 1;
let companyActive = 1;
const arrowToggle = ["images/icon-arrow-down.svg", "images/icon-arrow-up.svg"];

features.addEventListener('click', () => {
    // Toggles between the arrow states.
    featuresActive %= 2;
    featuresArrow.src = arrowToggle[featuresActive++];

    featuresItems.classList.toggle("hide");
});

company.addEventListener('click', () => {
    // Toggles between the arrow states.
    companyActive %= 2;
    companyArrow.src = arrowToggle[companyActive++];

    companyItems.classList.toggle("hide");
});

// Mobile.
const mobile = document.querySelector(".mobile");
const mobileMenu = document.querySelector(".navBar__menu");
const menuClose = document.querySelector(".menu__close");

const featuresMobile = document.querySelectorAll(".features__dropDown")[1];
const featuresArrowMobile = document.querySelectorAll(".features__arrow")[1];
const featuresItemsMobile = document.querySelectorAll(".features__dropDownItems")[1];
const companyMobile = document.querySelectorAll(".company__dropDown")[1];
const companyArrowMobile = document.querySelectorAll(".company__arrow")[1];
const companyItemsMobile = document.querySelectorAll(".company__dropDownItems")[1];

console.log(featuresMobile);

mobileMenu.addEventListener('click', () => {
    mobile.classList.remove("hide");
});

menuClose.addEventListener('click', () => {
    mobile.classList.add("hide");
});

// Mobile arrow state.
let featuresActiveMobile = 1;
let companyActiveMobile = 1;
const arrowToggleMobile = ["images/icon-arrow-down.svg", "images/icon-arrow-up.svg"];

featuresMobile.addEventListener('click', () => {
    // Toggles between the arrow states.
    featuresActiveMobile %= 2;
    featuresArrowMobile.src = arrowToggle[featuresActiveMobile++];

    featuresItemsMobile.classList.toggle("hide");
});

companyMobile.addEventListener('click', () => {
    // Toggles between the arrow states.
    companyActiveMobile %= 2;
    companyArrowMobile.src = arrowToggle[companyActiveMobile++];

    companyItemsMobile.classList.toggle("hide");
});