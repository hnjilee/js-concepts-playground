// 암묵적 타입 변환으로 발생 가능한 문제

// 예시 1: 숫자 + 문자열
function totalCount(count) {
  let total = 0;
  console.log((total += count));
}
totalCount('1'); // '01'

// 예시 2: 조건문에서 falsy 값
let value = 0;
if (value) {
  console.log('값이 있음');
} else {
  console.log('값이 없음');
} // 값이 없음
