var main = function() {
  /* Push the body and the nav over by 285px over */
var images = ['Artist/SalvadorDali/ELEP.jpg',
              'Artist/SalvadorDali/LR2.jpg',
              'Artist/SalvadorDali/LS.jpg',
              'Artist/SalvadorDali/Mirage.jpg',
              'Artist/SalvadorDali/MoN.jpg',
              'Artist/SalvadorDali/PoM.jpg',
              'Artist/SalvadorDali/RE.jpg',
              'Artist/SalvadorDali/SLMF.jpg',
              'Artist/SalvadorDali/TBG.jpg',
              'Artist/SalvadorDali/TT.jpg',
              'Artist/SalvadorDali/visage.jpg'];

  var randomNumber = Math.floor(Math.random() * images.length);
  var bgImg = images[randomNumber];
  
  $('.jumbotron').css({'background': 'url('+bgImg+')'});
  // document.body.background = bgImg;
  // $('.jumbotron').addClass(bgImg);


  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });


};


$(document).ready(main);