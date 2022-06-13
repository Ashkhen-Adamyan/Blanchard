const container = document.querySelector(".container")
const hero__swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
  delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
})

const buttonDrop = document.querySelectorAll('.hero__menu-link');
  //на каждую кнопку вешаем обработчик
  buttonDrop.forEach(function (btn){
    btn.addEventListener('click', function(e){
      let button = this;
      console.log(this)
      if (e.target.classList.contains('activ')) { //если уже класс есть на этой кнопке
        e.currentTarget.classList.remove('activ') //то удаляем конкретно на этой кнопке
      } else {
        e.target.classList.add('activ') //иначе добавляем класс
        buttonDrop.forEach(el => {      //удаляем активный класс на других кнопках
          if (el != button) {
            el.classList.remove("activ");
          }
        });
      }
    })
  })
  //если это не кнопка и не само выпадающее меню, то удаляем класс
  //первое условие необходимо добавить, чтобы незацикливать появление->исчезновение класса
  document.addEventListener('click', function(event){
    if (!event.target.classList.contains('hero__menu-link') && !event.target.classList.contains('nav-direction__scroll')){
      buttonDrop.forEach(function(e){
        e.classList.remove('activ')
      })
    }
  })
    
  const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), { autoHide: false, scrollbarMaxSize: 28 });
  simpleBar1.recalculate();

  const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), { autoHide: false, scrollbarMaxSize: 28 });
  simpleBar2.recalculate();

  const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), { autoHide: false, scrollbarMaxSize: 28 });
  simpleBar3.recalculate();

  const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), { autoHide: false, scrollbarMaxSize: 28 });
  simpleBar4.recalculate();

  const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), { autoHide: false, scrollbarMaxSize: 28 });
  simpleBar5.recalculate();

const gallery__content = document.querySelector(".gallery__block-right")
const gallery__swiper = new Swiper('.gallery__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2,
    },
    691: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 0
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

const events = document.querySelector(".events__content")
const events__swiper = new Swiper('.events__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    426: {
      slidesPerView: 1,
      spaceBetween: 70,
      slidesPerGroup: 1,
    },
    596: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 2,
    },
    691: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 60,
      slidesPerGroup: 2,
    },
    952: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  pagination: {
    el: '.events__swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
});

const projects = document.querySelector(".projects__content")
const projects__swiper = new Swiper('.projects__swiper', {
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2,
    },
    691: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
      errorMessage: 'name is invalid'
    },
    tel: {
      required: true,
      errorMessage: 'tel is invalid',
      function: (name,value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
});

ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.760, 37.615],
      zoom: 14.2
    });
    var myPlacemark = new ymaps.Placemark([55.759, 37.614419], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-icon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  };

const element = document.querySelector('select');
const choices = new Choices(element, {
  allowHTML : true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
})

tippy('.marker-one', {
  theme: 'custom',
  content: 'Пример современных тенденций - современная методология разработки',
  duration: [600, 600],
  maxWidth: 270,
});
tippy('.marker-two', {
  theme: 'custom',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  duration: [600, 600],
  maxWidth: 270,
});
tippy('.marker-three', {
  theme: 'custom',
  content: 'В стремлении повысить качество',
  duration: [600, 600],
  maxWidth: 270,
});

/*burger&search*/

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.menu__btn').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search').addEventListener('click', function(){
    document.querySelector('.header__search-form').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.search-form__closed-search').addEventListener('click', function(){
    document.querySelector('.header__search-form').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.gallery__slide-two').addEventListener('click', function(){
    document.querySelector('#openModal').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.modal__btn-close').addEventListener('click', function(){
    document.querySelector('#openModal').classList.toggle('is-active')
  })
})