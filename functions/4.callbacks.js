// 콜백 함수
// 함수를 인자로 전달

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, operation) {
  return operation(a, b);
}

console.log(calculator(1, 2, add)); // 3
console.log(calculator(1, 2, multiply)); // 2
