const toTopEl = document.querySelector('#to-top');


// 음료 사진 fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in'); 
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션) - gsap 애니메니션 라이브러리 사용
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 첫번째 사진 0.7초 뒤에, 두번째 사진 1.4초 뒤에, 세번째 사진 2.1초 뒤에
    opacity: 1
  });
});



/**
 * 슬라이드 요소 관리
 */
 new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEls){
  new ScrollMagic
    .Scene({
      triggerElement: spyEls,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8          // 뷰포트 0.8 지점에 걸리면 어떠한 내용이 실행됨
    })          
    .setClassToggle(spyEls, 'show')
    .addTo(new ScrollMagic.Controller());         // 메소드 체이닝
});