// 이벤트 객체 = 이벤트에 관한 정보를 담은 객체
// 이벤트 발생 시 생성되어 핸들러에 전달됨

// 핵심 속성 - 이벤트 타겟
// event.target = 이벤트가 발생한 요소
// event.currentTarget = 리스너가 등록된 요소

const inner = document.querySelector('.inner');
const button = document.querySelector('.button');

inner.addEventListener('click', event =>
  console.log(
    `inner - ${event.target.tagName}, ${event.currentTarget.tagName} `,
  ),
);

button.addEventListener('click', event =>
  console.log(
    `button - ${event.target.tagName}, ${event.currentTarget.tagName} `,
  ),
);

// 버튼 클릭 시
// button - BUTTON, BUTTON
// inner - BUTTON, DIV
