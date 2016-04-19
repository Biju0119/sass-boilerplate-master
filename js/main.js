
//Mobile Menu

$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});


// $('.mob-btn').click(function(event){

//   $('body').toggleClass('open');
//   event.stopPropagation();

// })

// $('.overlay').click(function(){
//   if($('body').hasClass('open')){
//     $('body').removeClass('open');
//   }
// });


$('.main-menu li:has(ul)').addClass('submenu');
$('.main-menu li:has(ul)').append( "<i></i>" );

$('.main-menu i').click(function(){
 $(this).parent('li').toggleClass('show-menu');
})

// $('.top-menu li:has(ul)').addClass('submenu');

$(".mob-btn").click(function(){
    $( ".tp-nav" ).prependTo ( ".main-menu" ) ;
}); 












svg4everybody();



// Slim Header


   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".header").addClass("slim-header");
    
          
    } else {
      $(".header").removeClass("slim-header");
          }
   });





var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();








