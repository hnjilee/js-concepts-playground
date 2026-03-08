// 이벤트 = 사용자 행동을 감지하고, 콜백을 실행하는 구조

const btn = document.querySelector('button');

// 1. 이벤트가 발생함
// 2. 브라우저가 이벤트 객체를 생성함
// 3. 해당 요소에 등록된 리스너를 탐색함
// 4. 이벤트 전파 단계에 따라 콜백을 실행함
btn.addEventListener('click', event => {
  console.log('clicked');
});
