// 얕은 복사
// 중첩 객체는 여전히 공유

const a = { x: 1, nested: { y: 1 } };
const b = { ...a }; // 최상위만 새로 만듬
b.nested.y = 2;
console.log(a.nested.y); // 2
