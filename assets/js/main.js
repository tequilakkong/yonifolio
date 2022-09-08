//스크롤 애니메이션
var wow = new WOW(
  {
    boxClass:     'item', 
    animateClass: 'animate__animated',
    offset:       50,         
    mobile:       true,   
    live:         true, 
    callback:     function(box) {
    },
    scrollContainer: null, 
    resetAnimation: true
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
  var offset = $('.s2').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});


$(document).ready(function(){
  $('#about_btn').click(function(){
  var offset = $('.s3').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});

$(document).ready(function(){
  $('#contact_btn').click(function(){
  var offset = $('#footer').offset(); 
  $('html').animate({scrollTop : offset.top}, 400);	
  });	
});


//프로젝트 탭 메뉴
var $tabBtn = $('.tab li a');

$tabBtn.click(function(e){
    e.preventDefault();
    $tabBtn.removeClass('on'); 
    $(this).addClass('on');
});


$('.btn_bs').click(function(){
    $('.all').fadeOut(0);
    $('.basic').fadeIn(500);
});

$('.btn_rsp').click(function(){
    $('.all').fadeOut(0);
    $('.responsive').fadeIn(500);
});
$('.btn_ad').click(function(){
    $('.all').fadeOut(0);
    $('.adaptive').fadeIn(500);
});



//프로젝트 사이트 이동
pSite1 = 'https://tequilakkong.github.io/laneige/';
pSite2 = 'https://tequilakkong.github.io/tiretech/';
pSite3 = 'https://tequilakkong.github.io/hotelLago/';
pSite4 = 'https://tequilakkong.github.io/sidance2021/';
pSite5 = 'https://tequilakkong.github.io/lottehotel/'
pSite6 = 'https://tequilakkong.github.io/KBcard/'
pSite7 = 'https://tequilakkong.github.io/mocamp_desktop/'
pSite7_m = 'https://tequilakkong.github.io/m_mocamp/'


function project1() {
  window.open(pSite1, "_blank"); //기존 창에서 페이지 이동
}
function project2() {
  window.open(pSite2, "_blank");
}
function project3() {
  window.open(pSite3, "_blank"); 
}
function project4() {
  window.open(pSite4, "_blank");
}
function project5() {
  window.open(pSite5, "_blank"); 
}
function project6() {
  window.open(pSite6, "_blank");
}
function project7() {
  window.open(pSite7, "_blank");
}
function project7_m() {
  window.open(pSite7_m, "_blank", "width=375, height=800");
}

