/////map/////
let center = [60.01323908006526,30.278656715488296];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 15
	});

	 placemark_main = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
        iconImageHref: 'img/location_map/geolocation_full.svg',
        iconImageSize: [180, 180],
		iconImageOffset: [-10, -80]
	}),
     placemark_pool = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
        iconImageHref: 'img/location_map/pool.svg',
        iconImageSize: [80, 80],
		iconImageOffset: [-180, -83]
	}),
    placemark_fuel = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
        iconImageHref: 'img/location_map/fuel_on_map.svg',
        iconImageSize: [80, 80],
		iconImageOffset: [-10, +170]
	}),
    placemark_store = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
        iconImageHref: 'img/location_map/store_on_map.svg',
        iconImageSize: [80, 80],
		iconImageOffset: [-10, +10]
	}),
    placemark_hospital = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
        iconImageHref: 'img/location_map/hospital_on_map.svg',
        iconImageSize: [80, 80],
		iconImageOffset: [-150, +50]
	}),
    placemark_cafe = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
        iconImageHref: 'img/location_map/cafe.svg',
        iconImageSize: [80, 80],
		iconImageOffset: [-300, +70]
	});
   
    
	map.geoObjects.add(placemark_main);
    map.geoObjects.add(placemark_pool);
    map.geoObjects.add(placemark_fuel);
    map.geoObjects.add(placemark_store);
    map.geoObjects.add(placemark_hospital);
    map.geoObjects.add(placemark_cafe);
    map.controls.remove('zoomControl');
    map.controls.remove('searchControl'); 
    
}

ymaps.ready(init);

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
const passive_marker = document.getElementById('geo-off-icon');
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
    
  };

////popup////

const menu_button = document.getElementById('open-popUp');
const popup_menu = document.getElementById('popUp_wrapper');
const menu_close_btn = document.getElementById('close-popUp');


menu_button.onclick = function() {
    document.body.style.overflow = 'hidden';
    
    if (popup_menu.style.display === "none") {
        popup_menu.style.display = "block";
    } else {
        popup_menu.style.display = "none";
    }
};

menu_close_btn.onclick = function() {
    popup_menu.style.display = "none";
    document.body.style.overflow = '';
};



