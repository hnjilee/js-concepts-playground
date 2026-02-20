// 클로저 = 함수가 외부 스코프의 변수를 기억하는 특성
// 함수가 선언될 때의 스코프를 기억하고,
// 외부 함수가 종료된 후에도 그 변수에 접근 가능한 특성

function outer() {
  const x = 10;

  function inner() {
    return x;
  }

  return inner;
}
// 스코프 체인 형성: inner → outer → global

const fn = outer();

// outer는 종료되었지만, inner는 x를 기억함
console.log(fn()); // 10
