// 웹 스토리지는 문자열 기반 저장소이므로 객체는 JSON으로 저장

const user = { name: 'Kim' };

localStorage.setItem('user', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user'))); // {name: 'Kim'}

// localStorage vs sessionStorage 차이

localStorage.setItem('storage', 'local');
sessionStorage.setItem('storage', 'session');

console.log(`localStorage: ${localStorage.getItem('storage')}`);
console.log(`sessionStorage: ${sessionStorage.getItem('storage')}`);

/*
1. 새로고침 → 둘 다 유지
localStorage: local
sessionStorage: session

2. 새 탭 열기 → sessionStorage 없음
localStorage: local
sessionStorage: null

3. 브라우저 재시작 → localStorage 유지
localStorage: local
sessionStorage: null
*/
