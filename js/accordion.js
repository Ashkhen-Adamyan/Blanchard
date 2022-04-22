$(function () {
    $('.accordion').accordion({
        active: 0,
        icons: false,
        collapsible: true,
        heightStyle: "content",
        classes: {
            'ui-accordion': 'question__list',
            'ui-state-default': 'btn--question::after',
        },
    });
});
