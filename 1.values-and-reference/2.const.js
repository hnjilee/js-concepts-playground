// 재할당 불가
// 객체 내부 값 변경 가능
const obj = { x: 1 };
// obj = {}; // error
obj.x = 2;
console.log(obj.x); // 2
