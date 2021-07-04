$(document).ready(function(){
  $('.header-wrapper__img').click(function(){
    $('.header-wrapper__dropdown').toggle();
  })

  $('.settings-wrapper__wrp-providers').click(function(){
    $('.settings-wrapper__qw').toggle();
    
  })
  
  $('.header-wrapper__wrp-menu').click(function(){
    $('.header-wrapper__drp-r').css('right', 0);
    $('.bg-shadow').css('display', 'block');
  })

  $('.bg-shadow').click(function(){
    $('.header-wrapper__drp-r').css('right', -1000);
    $('.bg-shadow').css('display', 'none');
  })

  
});


var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2300,
    width: 100
  },
  cssMode: true,
  loop: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,

});