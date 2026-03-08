// 클로저 = 함수가 외부 스코프의 변수를 기억하는 특성

// 함수는 선언 위치에 따라 결정되는 접근 가능한 변수의 범위(lexical scope)를 "유지"한다.
// 그래서 내부 함수에서 외부 스코프를 참조하면,
// 외부 함수 종료 후에도 메모리에서 사라지지 않고 그 변수에 접근할 수 있다.

function outer() {
  const x = 10;

  function inner() {
    return x;
  }

  return inner;
}
// 스코프 체인 형성: inner → outer → global

const fn = outer();

// outer는 종료되었지만, inner는 x에 접근 가능함
console.log(fn()); // 10
