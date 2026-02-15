// 예방 - 일치 연산자 사용, 명시적 타입 변환, 조건 명확화

// 방법 1: 연산 전 타입 변환
function totalCount(count) {
  let total = 0;
  console.log((total += Number(count)));
}
totalCount('1'); // 1

// 방법 2: 값의 의미를 명확히 검사
let value = 0;
if (value !== null && value !== undefined) {
  console.log('값이 있음');
} else {
  console.log('값이 없음');
} // 값이 있음
