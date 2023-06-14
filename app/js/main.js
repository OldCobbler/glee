$(function(){

  
  $(".star").rateYo({
    starWidth: "12px",
    readOnly: true
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