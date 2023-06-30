$(function(){

  $('.detalis-related__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.contacts__box-link').on('click', function(e){
    e.preventDefault();
    $('.contacts__box-link').removeClass('contacts__box-link--active');
    $(this).addClass('contacts__box-link--active');

    $('.contacts-content__item').removeClass('contacts-content__item--active');
    $($(this).attr('href')).addClass('contacts-content__item--active');
  });

  $('.detalis-tabs__top-link').on('click', function(e){
    e.preventDefault();
    $('.detalis-tabs__top-link').removeClass('detalis-tabs__top-link--active');
    $(this).addClass('detalis-tabs__top-link--active');

    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
  });

  $('.detalis-one__input').styler();

  $(".detalis-one__item-star").rateYo({
    starWidth: "18px",
    readOnly: true,
    ratedFill: "#ffcc00"
  });

  $('.detalis-slider__thumb').slick({
    asNavFor: '.detalis-slider__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.detalis-slider__big').slick({
    asNavFor: '.detalis-slider__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  
  $(".star").rateYo({
    starWidth: "12px",
    readOnly: true
  });

  $(".products-content-list__star").rateYo({
    starWidth: "18px",
    readOnly: true,
    ratedFill: "#ffcc00"
  });

  $('.products-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.products-price__from').text(data.from);
      $('.products-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.products-price__from').text(data.from);
      $('.products-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.products__items ');
  var mixer = mixitup('.design__content ');
  

});