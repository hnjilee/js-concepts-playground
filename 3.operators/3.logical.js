// 단락 평가 활용

// 예시 1: 조건부 함수 호출
// &&은 앞의 피연산자가 truthy면 뒤의 피연산자까지 평가됨
// falsy면 평가(실행)되지 않음
let isLoggedIn = true;
function showProfile() {
  console.log('profile');
}
isLoggedIn && showProfile(); // profile
isLoggedIn = false;
isLoggedIn && showProfile(); //

// 예시 2: 조건부 기본값 설정
// ||는 왼쪽이 truthy면 그 값 반환
// falsy면 오른쪽 값 반환
let name = 'Lee';
console.log(name || 'Guest'); // Lee
name = '';
console.log(name || 'Guest'); // Guest
