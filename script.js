// event pada saat link di klik
$('.page-scroll').on('click', function(e){

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap element yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'swing');

  e.preventDefault();

});

// parallax

// About
// $(window).on('load', function(){
//   $('.pKiri').addClass('pMuncul');
//   $('.pKanan').addClass('pMuncul');
// })

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  // jumbotron
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'

  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll +'%)'
  });

  // portfolio
  if( wScroll > $('.portfolio').offset().top - 250 ){
    $('.portfolio .thumbnail').each(function(i){
      setTimeout(function(){
        $('.portfolio .thumbnail').eq(i).addClass('show');
      }, 300 * (i+1));
    });
    //
  }

  // About
  if( wScroll > $('.about').offset().top -250 ){
    $('.text-about').addClass('text-about-show');
  }

});