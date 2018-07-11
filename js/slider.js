$(document).ready(function () {
  $('.player-application__content--choice').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    arrows: true,
    variableWidth: true,
    infinite: false,
    initialSlide: 1,
    nextArrow: $(".player-application__content--buttons--next"),
    prevArrow: $(".player-application__content--buttons--previous")
  });
});

	