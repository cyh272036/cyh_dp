$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) { // 스크롤이 50px 이상이면
        $('.navbar_wrap').addClass('fixed-top'); // fixed-top 클래스 추가
      } else {
        $('.navbar_wrap').removeClass('fixed-top'); // fixed-top 클래스 제거
      }
    });
  });