import { getDataFromApi } from "./utlis.js";

/*burger*/
let menuBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".header__burger-menu");
let body = document.querySelector("body");
let html = document.querySelector("html");
let link = document.querySelectorAll(".header__burger-link");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("header__burger-active");
  menu.classList.toggle("header__burger-menu-active");
  body.classList.toggle("overflow--lock");
  html.classList.toggle("overflow--lock");

  link.forEach((el) => {
    el.addEventListener("click", () => {
      body.classList.remove("overflow--lock");
      html.classList.remove("overflow--lock");
      menuBtn.classList.remove("header__burger-active");
      menu.classList.remove("header__burger-menu-active");
    });
  });
});

/*search*/

let searchBtn = document.querySelector(".header__searth-btn");
let searchForm = document.querySelector(".header__search-top");
let searchFormClose = document.querySelector(".header__searth-close");

searchBtn.addEventListener("click", function () {
  searchForm.classList.add("header__searth-active");
});

searchFormClose.addEventListener("click", function () {
  searchForm.classList.remove("header__searth-active");
});

// header dropdawn
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled",
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();
// scroll
const simpleBar1 = new SimpleBar(document.getElementById("scroll-1"), {
  autoHide: true,
  scrollbarMaxSize: 28,
});
simpleBar1.recalculate();

const simpleBar2 = new SimpleBar(document.getElementById("scroll-2"), {
  autoHide: false,
  scrollbarMaxSize: 28,
});
simpleBar2.recalculate();

const simpleBar3 = new SimpleBar(document.getElementById("scroll-3"), {
  autoHide: false,
  scrollbarMaxSize: 28,
});
simpleBar3.recalculate();

const simpleBar4 = new SimpleBar(document.getElementById("scroll-4"), {
  autoHide: false,
  scrollbarMaxSize: 28,
});
simpleBar4.recalculate();

const simpleBar5 = new SimpleBar(document.getElementById("scroll-5"), {
  autoHide: false,
  scrollbarMaxSize: 28,
});
simpleBar5.recalculate();

// hero swiper
const heroSwiper = new Swiper(".hero__swiper-container", {
  allowTouchMove: false,
  loop: true,
  effect: "fade",
  speed: 6000,
  autoplay: {
    delay: 2000,
  },
});

// swiper gallery
const swiper = new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  spaceBetween: 50,
  // пагинация
  pagination: {
    el: ".gallery__swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  // навигация
  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    572: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1210: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",
});

// select on gallery

const element = document.querySelector("#selectCustom");
const choices = new Choices(element, {
  searchEnabled: false,
  position: "bottom",
  placeholder: true,
  itemSelectText: "",
});

// modal on gallery
const modal = new GraphModal();

// accordion on catalog

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0],
  });
})();

// tabs on catalog

document.querySelectorAll(".catalog__list-item").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".catalog__list-item").forEach(function (btn) {
      btn.classList.remove("catalog__list-active");
    });
    e.currentTarget.classList.add("catalog__list-active");

    document.querySelectorAll(".catalog__artist").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("catalog__active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog__active");
  });
});

// swiper on events

const eventsSwiper = new Swiper(".events__swiper-container", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 1,
    fill: "row",
  },

  spaceBetween: 50,

  pagination: {
    el: ".events__swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".events__swiper-button-next",
    prevEl: ".events__swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    650: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      console.log();
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
  },
});

/*tooltip on projects*/

(() => {
  tippy(".js-tooltip", {
    theme: "projects-tooltip",
    maxWidth: 264,
  });
})();

// swiper on projects

const projectsSwiper = new Swiper(".projects__swiper-container", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 50,
  // пагинация
  pagination: {
    el: ".projects__swiper-pagination",
  },
  // навигация
  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    571: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1210: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

// map

ymaps.ready(init);
function init() {
  const mapElem = document.querySelector("#map");
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 17,
      controls: ["geolocationControl", "zoomControl"],
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" },
    }
  );

  myMap.behaviors.disable("scrollZoom");

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/placemark.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );
  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// form-mask

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

const validation = new JustValidate(".contacts__form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Как вас зовут?",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Имя слишком короткое",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Имя слишком длинное",
    },
  ])

  .addField("#number", [
    {
      rule: "required",
      errorMessage: "Укажите ваш телефон",
    },
    {
      rule: "minLength",
      value: 11,
      errorMessage: "Неверный формат",
    },
  ]);

const onSendForm = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  const body = new URLSearchParams(formData).toString();

  const params = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers,
    body,
  };

  getDataFromApi("/", params)
    .then((data) => {
      if (data) return;

      event.target.reset();
    })
    .catch((error) => {
      alert(error);
      return error;
    });
};

form.addEventListener("submit", onSendForm);
