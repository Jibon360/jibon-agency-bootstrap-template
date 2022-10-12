$(function () {
  // sticky navbar
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("nav-bg");
    }
    else {
      $(".navbar").removeClass("nav-bg");

    }
  })

  // typeing animation
  var typed = new Typed('.element', {
    strings: ['Awesome Dedicated Service.', 'Dynamic Creative Agency.'],
    smartBackspace: true,
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backDelay: 700,
    smartBackspace: true,
    backSpeed: 100,
    startDelay: 100,


  });

  // counter up js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // owl carousle
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })


  // color palatge
  $(".colortheme-icon").on("click", function (param) {
    $(".color-palate").toggleClass("toggleactive");
  })

  $(".single-color").each(function (param) {
    $(this).on("click", function (param) {
      let colors = $(this).attr("data-color");
      document.documentElement.style.setProperty("--theme-color", colors);
    })
  })


  // navbar toggler button 
  $(".fa-bars").on("click", function (param) {
    $(this).toggleClass("fa-xmark");
  })




})

var mixer = mixitup('.mixers');






