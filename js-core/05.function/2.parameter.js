// 매개변수 = 외부 값을 함수 내부로 전달받는 통로

// 문제: 항상 같은 값 → 재사용 불가
function greet() {
  console.log('hi bunny'); // 다른 이름 사용 불가
}

greet(); // hi bunny

// 해결: 매개변수를 통해 외부 값을 받음
function sayHi(name) {
  console.log(`hi ${name}`);
}

sayHi('bunny'); // hi bunny
sayHi('bad bunny'); // hi bad bunny
