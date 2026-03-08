// 함수 선언문은 호이스팅되지만, 함수 표현식은 그렇지 않다

// 함수 선언문은 호이스팅 시 함수 객체가 생성됨
// 선언 전 호출 가능
test1(); // hello

function test1() {
  console.log('hello');
}

// 함수 표현식은 변수 초기화/함수 할당 시 함수 객체가 생성됨
// 선언 전 호출 불가
// test2(); // ReferenceError - 변수는 호이스팅되었지만, 초기화되지 않음 (즉, 함수가 할당되지 않음)

const test2 = function () {
  console.log('hello');
};
