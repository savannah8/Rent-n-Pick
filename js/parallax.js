
$(document).ready(function(){
  AOS.init();
var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
  }
  //image fade
  if(wScroll > $('.product-pics').offset().top - ($(window).height() / 1.2)) {

    $('.product-pics figure').each(function(i){

      setTimeout(function(){
        $('.product-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }
  //window hover effect
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }
  //about us
  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350);

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
//flip
$('.thumb a').mouseover(function(e){
  e.preventDefault();
  $('.imgBox img').attr("src", $(this).attr("href"));
})

});