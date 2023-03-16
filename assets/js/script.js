const addEventOnElment = (elements, evenType, callback)=>{
    console.log("add")
    for (let i = 0, len = elements.length; i<len; i++) {
        elements[i].addEventListener(evenType, callback);
    }
}





/**
 * NavBar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]")
console.log(navTogglers)

const toggleNavBar = ()=>{
    console.log("click")
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventOnElment(navTogglers, "click", toggleNavBar);

/**
 * slider
 */
const slider = document.querySelectorAll("[data-slider]");

const initSlider = (currentSlider) => {
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");
    let currentSliderpo = 0;

    const moveSliderItem = () =>{
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSliderpo].offsetLeft}px)`;
    };

    const sliderPrev = () =>{
        if (currentSliderpo <= 0) {
            currentSliderpo = sliderContainer.childElementCount -1;
        }else{
            currentSliderpo--;
        }
        moveSliderItem();
    };
    sliderPrevBtn.addEventListener("click", sliderPrev);

    //Next
    const sliderNext = () => {
        const sliderEnd = currentSliderpo >= sliderContainer.childElementCount -1;

        if (sliderEnd) {
            currentSliderpo = 0;
        }else{
            currentSliderpo++;
        }
        moveSliderItem();
    };
    sliderNextBtn.addEventListener("click", sliderNext);


    //No more slide
    const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
    if (dontHaveExtraItem) {
        sliderNextBtn.style.display = "none";
        sliderPrevBtn.style.display = "none";
    }
    } ;

    for(let i=0, len = slider.length; i<len; i++){
        initSlider(slider[i]);
    }
   