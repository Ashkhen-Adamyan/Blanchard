let swiperHeader = new Swiper(".swiper--header", {
    allowTouchMove: false,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
    }

});


let swiperGallery = new Swiper('.swiper--gallery', {

    slideLabelMessage: false,
    // Optional parameters

    /*slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,*/

    breakpoints: {
        // when window width is >= ____px
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 38,
        },
        1024: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 35,
        },
        1440: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
    pagination: {
        el: ".swiper-pagination-gallery",
        type: "fraction",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--gallery',
        prevEl: '.swiper-button-prev--gallery',
    },

});


let swiperEvents = new Swiper('.swiper--events', {

    slideLabelMessage: false,
    // Optional parameters
    /*slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 50,*/
    breakpoints: {
        // when window width is >= _____px
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 27,
        },
        1440: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--events',
        prevEl: '.swiper-button-prev--events',
        disabledClass: 'swiper-button-disabled--events',
    },

    pagination: {
        el: '.swiper-pagination-events',
        type: 'bullets',
    },
});

let swiperProject = new Swiper('.swiper--project', {
    // Optional parameters

    /*slidesPerView: 3,
    spaceBetween: 50,*/

    breakpoints: {
        // when window width is >= ___px
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--project',
        prevEl: '.swiper-button-prev--project',
    },
});