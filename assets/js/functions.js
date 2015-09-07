$( window ).scroll(function() {

  var wScroll = $(this).scrollTop();

  console.log(wScroll)

  $('.logo').css({
    'transform' : 'translate(0px, '+wScroll /2+'%)'
  });

  if(wScroll > $('.page-pics').offset().top - ($(window).height() / 1.2)){

    $('.page-pics figure').each(function(i){
      setTimeout(function(){
        $('.page-pics figure').eq(i).addClass('are-showing')
      }, 150 * (i+1));

    });


  }
});
$(function(){
  $('.expand-header').click(function(){
    $(this).closest('.expand-container').toggleClass('collapsed');
  });

});
