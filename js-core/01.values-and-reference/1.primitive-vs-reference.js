// 원시 vs 객체

// 원시 타입은 값 복사
let a = 1;
let b = a;
a = 2;
console.log(a); // 2
console.log(b); // 1

// 객체 타입은 참조 복사
let obj1 = { x: 1 };
let obj2 = obj1; // 참조가 복사됨 => 같은 객체 공유
obj2.x = 2;
console.log(obj2); // { x: 2 }
console.log(obj1); // { x: 2 }
