// 요소 선택

// 클래스를 가진 첫 번째 요소 선택
const box = document.querySelector('.box');
console.log(box); // <div class="box">Hello</div>

// 태그를 가진 모든 요소들 선택
const lis = document.querySelectorAll('li');
console.log(lis); // NodeList(3)
