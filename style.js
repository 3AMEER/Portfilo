const fadeOut = () => {
    const loderwrapper = document.querySelector('.wrapper');
    loderwrapper.classList.add('fade');

}

window.addEventListener('load', fadeOut)




// Strat Boxs
const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 4) * 3;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()



// Start JS Swipper
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//       1024: {
//         slidesPerView: 6,
//         spaceBetween: 50,
//       },
//     },
// });




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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



var mybotton = document.getElementById('goup');

window.onscroll = function () {

    'user strict';

    if (window.pageYOffset >= 800){
        mybotton.style.display = "block";
    }
    else {
        mybotton.style.display = "none";
    }
};

mybotton.onclick = function () {
    'user strict'
    window.scrollTo({
         top: 0,
         behavior: "smooth",
    });
} 
