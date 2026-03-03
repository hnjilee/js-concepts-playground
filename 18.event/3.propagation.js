// 이벤트 전파
// 1. 캡처링 단계 (위 → 아래)
// 2. 타겟 단계
// 3. 버블링 단계 (아래 → 위)
// 기본은 버블링 단계에서 실행

// stopPropagation: 버블링 중단

const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const button = document.querySelector('.button');

// outer.addEventListener('click', event => console.log('outer'));
outer.addEventListener('click', event => console.log('outer(capture)'), true);
inner.addEventListener('click', event => console.log('inner'));
button.addEventListener('click', event => {
  console.log('button');
  //   event.stopPropagation();
});

// 버튼 클릭 시
// outer(capture), button, inner

// stopPropagation 포함 시, button만 출력됨
