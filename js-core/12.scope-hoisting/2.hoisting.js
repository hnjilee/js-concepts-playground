// 호이스팅 = 선언이 코드 실행 전에 처리됨

// 문제: 선언 전 접근 가능 → 버그 가능성 ↑
console.log(a); // undefined
var a = 1;

// 해결: var 대신 let/const 사용
// let/const는 초기화 전 접근을 막음
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;
