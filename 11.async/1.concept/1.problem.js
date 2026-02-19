// 동기 코드는 완료될 때까지 다음 코드로 넘어갈 수 없다.

// 여기에서 작업 완료까지 머뭄
function a() {
  for (let i = 0; i < 1000000000; i++); // 시간 걸리는 작업 (환경에 따라 조절하기)
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('started'); // started
const result = c();
console.log(result); // (시간 조금 지난 후) 3
