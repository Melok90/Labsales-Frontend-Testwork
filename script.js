
/////swiper////
var swiper = new Swiper(".swiper-cost", {
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,
    freeMode: true,
    autoplay: {
        delay: 9000,
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

const map_marker = document.getElementById('map-click');
const active_marker = document.getElementById('geo-on-icon');
const active_marker_2 = document.getElementById('geo-on-icon_2');
const passive_marker = document.getElementById('geo-off-icon');
const passive_marker_2 = document.getElementById('geo-off-icon_2');
const text_active = document.getElementById('text_active');

map_marker.onclick = function () {
    if (active_marker.style.display === "none") {
      active_marker.style.display = "block";
      passive_marker.style.display = "none";
      text_active.style.color = "#31bef4";
    } else if (active_marker.style.display === "block") {
      active_marker.style.display = "none";
      passive_marker.style.display = "block";
      text_active.style.color = "";
    }
  
    if (active_marker_2.style.display === "none") {
      active_marker_2.style.display = "block";
      passive_marker_2.style.display = "none";
    } else if (active_marker_2.style.display === "block") {
      active_marker_2.style.display = "none";
      passive_marker_2.style.display = "block";
    }
  };

////popup////

// const popUp_btn = document.getElementById('open-popUp');

// popUp_btn.onclick = function()  {
//     console.log('hello')
// }

const menu_button = document.getElementById('open-popUp');
const popup_menu = document.getElementById('popUp_wrapper');
const menu_close_btn = document.getElementById('close-popUp');

menu_button.onclick = function() {
    if (popup_menu.style.display === "none") {
        popup_menu.style.display = "block";
    } else {
        popup_menu.style.display = "none";
    }
};

menu_close_btn.onclick = function() {
    popup_menu.style.display = "none";
};








//////////////////
// window.addEventListener('resize', centerElement);

// function centerElement() {
//   var element = document.getElementById('myElement');
//   element.style.top = '50%';
//   element.style.left = '50%';
//   element.style.transform = 'translate(-50%, -50%)';
// }

// centerElement();
///////////////////
