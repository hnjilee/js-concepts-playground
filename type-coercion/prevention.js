// 예방 - 일치 연산자 사용, 명시적 타입 변환, 조건 명확화

// 방법 1: 연산 전 타입 변환
function totalPrice(price) {
  let total = 0;
  console.log((total += Number(price)));
}
totalPrice('10'); // 10

// 방법 2: 값의 의미를 명확히 검사
if (value !== null && value !== undefined) {
  console.log('값이 있음');
} else {
  console.log('값이 없음');
} // 값이 있음
