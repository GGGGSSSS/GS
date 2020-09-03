$(function () {
  $(".nav>ul>li").hover(
    function () {
      $(this).children("ul").stop().slideDown(150);
    },
    function () {
      $(this).children("ul").stop().slideUp(100);
    }
  );
  $(".slide").click(function () {
    $(this).children("ul").stop().slideToggle(200);
  });

  // $('.ceshi').hover(function() {
  //     $(this).stop().fadeTo(1000, .3);
  // }, function() {
  //     $(this).stop().fadeTo(500, 1)

  // })
  // var index = 0;
  // $('.btn li').mouseover(function() {
  //         index++;
  //         if (index > 4) {
  //             index = 0;
  //         }
  //         $('.img li').eq(index).fadeIn().siblings().hide();

  //     })
  // --------------------------轮播按钮
  var index = 0;
  $(".banner div button:nth-of-type(1)").click(function () {
    index--;
    if (index < 0) {
      index = 4;
    }
    $(".img li").eq(index).stop().fadeIn().siblings().hide();
  });
  $(".banner div button:nth-of-type(2)").click(function () {
    index++;
    if (index > 4) {
      index = 0;
    }
    $(".img li").eq(index).stop().fadeIn().siblings().hide();
  });
  // ---------------------------------轮播按钮
  // var index = 0;
  // $('.btn>li').hover(function() {
  //     index = $(this).index();
  //     $('.img>li').eq(index).stop().fadeIn().siblings().hide();
  // });
});
