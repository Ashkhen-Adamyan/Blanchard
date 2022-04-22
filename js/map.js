document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.75846806898367, 37.60108849999989],
            zoom: 15,
            controls: ['geolocationControl', 'zoomControl']
        }, {
            suppressMapOpenBlock: true
        });

        var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon/subtract.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-5, -10]
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    }
});
