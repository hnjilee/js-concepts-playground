// 콜백 함수:
// 실행을 다른 함수에 위임 → 실행 시점 제어

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, operation) {
  return operation(a, b);
}

console.log(calculator(1, 2, add)); // 3
console.log(calculator(1, 2, multiply)); // 2
