// 스코프 = 접근 가능한 범위
// 선언된 위치에 따라 결정됨

// 전역 스코프
const a = 1;
console.log(a); // 1

// 블록 스코프
{
  const b = 2;
  console.log(b); // 2
}
// console.log(b); // ReferenceError

// 함수 스코프
function print() {
  const message = 'hello world';
  console.log(message);
}
print(); // hello world
// console.log(message); // ReferenceError
