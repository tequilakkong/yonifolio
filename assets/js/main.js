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


//프로젝트 사이트 이동
pSite1 = 'https://yonikk.cafe24.com/02/02_final/project/sidance/sidance_main.html';
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
stSite2 = 'subpage.html'

function stLink2() {
	location.href = stSite2;
}

