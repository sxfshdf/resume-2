!function(){
  var view = View('#mySlides')
  var controller = {
    view: null,
    swiper: null,
    swiperOptions:{
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init: function(view){
      this.swiper = new Swiper ('.swiper-container', 
      this.swiperOptions
      )
    }
  }
  controller.init(view)
}.call()
