//서브페이지 작업노트 스타일가이드
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



//홈 버튼 - 메인 페이지 이동
s1_link = 'index.html';

function homeLink() {
	location.replace(s1_link);
}



//BACK 버튼 - 메인 페이지 s3 이동
s3_link = 'index.html#section3';

function backLink() {
	location.replace(s3_link);
}
//참고: https://demun.tistory.com/2536#google_vignette [demun(대문블로그):티스토리]



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


//scroll down 클릭 시 부드럽게 item-2로 이동
$('.scroll_down_wrap').click(function(){
  var offset = $("#item-2").offset(); //해당 위치 반환
  $("html").animate({scrollTop: offset.top}, 200);
});


//메뉴 가이드 hover 이벤트
$(".guide_txt a").mouseenter(function(){
  $(".guide_img img:nth-child(2)").toggleClass('on')
});

$(".guide_txt a").mouseout(function(){
  $(".guide_img img:nth-child(2)").removeClass('on')
});


