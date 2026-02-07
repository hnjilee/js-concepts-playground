// Default parameters
// undefined일 때만 적용
function sum(a = 1, b = 1) {
  return a + b;
}
console.log(sum(null)); // null + 1 → 1

// Rest parameters
// 남은 인자들이 배열로 모임
function print(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
print(1, 2, 3, 4, 5); // a: 1, b: 2, numbers: [3, 4, 5]
