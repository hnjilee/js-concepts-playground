// 프로퍼티 접근

let fruit = { name: 'apple', color: 'red' };

// 점 표기법
console.log(fruit.name); // apple

// 대괄호 표기법
function getValue(obj, key) {
  return obj[key]; // 동적 키
}
console.log(getValue(fruit, 'color')); // red
