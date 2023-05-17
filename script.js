


var swiper = new Swiper(".swiper-cost", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});

////two swiper////

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});


