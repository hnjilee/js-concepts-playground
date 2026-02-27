// async/await는 Promise 기반
// await는 해당 라인에서 함수 실행을 잠시 멈추고,
// 그 밑의 모든 코드를 then의 콜백으로 만들어서
// 마이크로태스크 큐에 예약하는 것과 같다.

// 출력: 1, 3, 2

async function test() {
  console.log('1'); // 1. 콜 스택에서 실행
  await Promise.resolve(); // 2-1. 프로미스 객체 반환
  console.log('2'); // 2-2. 마이크로태스크 큐에 예약 → 4. 콜 스택에서 실행
}

/* 이 코드와 동작 방식이 동일함
function test() {
  console.log('1');
  return Promise.resolve()
    .then(() => console.log('2'));
}
*/

test();
console.log('3'); // 3. 콜 스택에서 실행
