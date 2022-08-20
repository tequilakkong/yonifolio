//스크롤 애니메이션
var wow = new WOW(
  {
    boxClass:     'item',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       50,          // distance(px) to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


//메뉴 슬라이드 열기
$('.menu_btn').click(function(){
  $('#menu_slide').animate({right:0},400,"swing");
  $('.menu_bg').css({'display':'block'}); 
});



//메뉴 슬라이드 닫기
$('.menu_bg').click(function(){
  $('.menu_bg').css({'display':'none'});
  $('#menu_slide').animate({right:-720},300,"swing");
});
$('.close_btn').click(function(){
  $('.menu_bg').css({'display':'none'});
  $('#menu_slide').animate({right:-720},300,"swing");
});



//메뉴 항목으로 이동
$(document).ready(function(){
  $('#home_btn').click(function(){
  var offset = $('.s1').offset(); //해당 위치 반환
  $('html').animate({scrollTop : offset.top}, 400);	// 선택한 위치로 이동. 두번째 인자는 0.4초를 의미한다.	
  });	
});

$(document).ready(function(){
  $('#work_btn').click(function(){
  var offset = $('.s3').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});

$(document).ready(function(){
  $('#process_btn').click(function(){
  var offset = $('.s4').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});

$(document).ready(function(){
  $('#about_btn').click(function(){
  var offset = $('.s2').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});

$(document).ready(function(){
  $('#contact_btn').click(function(){
  var offset = $('#footer').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});
// 출처: https://appsnuri.tistory.com/411



//실시간(현재) 스크롤값 얻기 (현재 스크롤값이 로깅됨)
// $(window).scroll(function () {
//   var scrollT = $(document).scrollTop(); //스크롤바의 상단위치        
//   var contentH = $('.s1').height(); //.s1의 높이  
// 	var floor = Math.floor(contentH);
// 	var floor2 = Math.floor(scrollT);
//   console.log('s1의 높이 정수는?'+ floor );
//   console.log('스크롤 정수는?'+ floor2 );
// });
// //- 출처: euntori.blog | [제이쿼리] 현재 스크롤값 가져오기(scroll) (2016.02.05)



//스킬바 애니메이션 -> 실패 버전
// $(document).ready(function(){    //스크롤 발생 이벤트 처리    
//   $('window').scroll(function(){        
//     var scrollT = $(document).scrollTop(); //스크롤바의 상단위치        
//     var contentH = $('.s1').height(); //.s1의 높이  
//     var floor_c = Math.floor(contentH);
//     var floor_s = Math.floor(scrollT);
//     var skillBar = $('.frontend_wrap .skill_wrap .skill_bar_fill')
//     if(floor_s = floor_c) { // 스크롤바 위치가 s1와 같을 때            
//       $(skillBar).animate({width:300},700,"swing");
//     }    
//   });
// });
// 출처: https://dororongju.tistory.com/93 [웹 개발 메모장:티스토리]


// //스킬바 애니메이션 -> 2nd 시도 -> 실패
// $(document).ready(function(){
//   $('window').scroll(function(){
//     var window_scrollTop = $(window).scrollTop();
//     var s1_scrollTop = $('.s1').offset().top; //$("선택자").offset().top; : 화면상에서 특정 요소의 y축 위치
//     var s2_scrollTop = $('.s2').offset().top;
   
//     console.log(window_scrollTop);
//     console.log(s1_scrollTop);
//     console.log(s2_scrollTop);
  
//     if(window_scrollTop < s1_scrollTop){
//       $(skillBar).animate({width:300},700,"swing");
//     }
//   });
// });




$('.s2').mouseenter(function(){
  $('.frontend_wrap .skill_wrap div:nth-child(1) .skill_bar_fill').animate({width:300},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.frontend_wrap .skill_wrap div:nth-child(2) .skill_bar_fill').animate({width:270},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.frontend_wrap .skill_wrap div:nth-child(3) .skill_bar_fill').animate({width:180},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.frontend_wrap .skill_wrap div:nth-child(4) .skill_bar_fill').animate({width:190},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.design_wrap .skill_wrap div:nth-child(1) .skill_bar_fill').animate({width:280},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.design_wrap .skill_wrap div:nth-child(2) .skill_bar_fill').animate({width:250},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.design_wrap .skill_wrap div:nth-child(3) .skill_bar_fill').animate({width:280},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.tools_wrap .skill_wrap div:nth-child(1) .skill_bar_fill').animate({width:280},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.tools_wrap .skill_wrap div:nth-child(2) .skill_bar_fill').animate({width:230},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.tools_wrap .skill_wrap div:nth-child(3) .skill_bar_fill').animate({width:330},700,"easeInSine");
});
$('.s2').mouseenter(function(){
  $('.tools_wrap .skill_wrap div:nth-child(4) .skill_bar_fill').animate({width:330},700,"easeInSine");
});






//프로젝트 사이트 이동
pSite1 = 'https://tequilakkong.github.io/sidance2021/';
pSite2 = 'https://tequilakkong.github.io/mocamp_desktop/'
pSite2_m = 'https://tequilakkong.github.io/m_mocamp/'
pSite3 = 'https://tequilakkong.github.io/laneige/'

function project1() {
  location.href = pSite1; //기존 창에서 페이지 이동
	// window.open(pSite1); //새창으로 열기
}

function project2() {
  location.href = pSite2;
}

function project2_m() {
  location.href = pSite2_m;
}

function project3() {
  location.href = pSite3;
}

//출처: https://jhost.tistory.com/62 [dev.j:티스토리]


//프로젝트 썸네일 hover
var du = 400; //변수설정, 시간

$('.s3 .cont_box_img').on('mouseenter',function(){
  $(this).find('.vn').stop().animate({opacity:1},du);
  $(this).find('.txt').stop().delay(100).animate({bottom:0},300);
  $(this).find('img').stop().animate({width:'110%', left:'-5%'},du);
})
.on('mouseleave',function(){
  $(this).find('.vn').stop().delay(200).animate({opacity:''},du); 
  $(this).find('.txt').stop().animate({bottom:'-120px'},300); 
  $(this).find('img').stop().animate({width:'100%',top:'', left:''},du);
})


//프로젝트 스타일 가이드 바로가기
stSite1 = 'subpage_sidance.html'
stSite2 = 'subpage_mocamp.html'
stSite3 = 'subpage_laneige.html'


function stLink1() {
	location.href = stSite1;
}

function stLink2() {
	location.href = stSite2;
}

function stLink3() {
	location.href = stSite3;
}
