// 요소 수정

// textContent - 텍스트만 변경
const box = document.querySelector('.box');
box.textContent = 'Hi';
console.log(box.textContent); // Hi

// innerHTML - HTML 문자열을 파싱하여 DOM으로 재구성
const ul = document.querySelector('ul');
ul.innerHTML = '<li>item</li>';
console.log(ul.innerHTML); // <li>item</li>
