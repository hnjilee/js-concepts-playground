// 클로저 활용 예시 1 - 독립적인 상태 유지

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

// 각각 독립적인 상태가 유지됨
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
