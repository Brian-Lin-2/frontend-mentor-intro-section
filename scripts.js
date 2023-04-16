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