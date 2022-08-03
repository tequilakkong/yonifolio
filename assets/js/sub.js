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